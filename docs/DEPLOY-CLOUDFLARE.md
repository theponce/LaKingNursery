# Deploy La King Nursery to Cloudflare Pages

Step-by-step instructions for deploying the La King Nursery Astro site to Cloudflare Pages with GitHub auto-deploy and a custom domain.

**Project details:**

| Setting              | Value                                        |
|----------------------|----------------------------------------------|
| GitHub repo          | `theponce/LaKingNursery`                     |
| Branch               | `main`                                       |
| Framework            | Astro 6 (static output)                      |
| Build command        | `npm run build`                              |
| Build output dir     | `dist`                                       |
| Node version         | >= 22.12.0                                   |
| Production URL       | https://lakingnursery.com                    |
| Environment vars     | None required (besides NODE_VERSION below)   |

---

## 1. Create a Cloudflare Pages Project

1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com) and log in.
2. In the left sidebar, click **Workers & Pages**.
3. Click **Create** (top right).
4. Select the **Pages** tab.
5. Click **Connect to Git**.
6. If you have not linked your GitHub account yet, click **Connect GitHub** and authorize Cloudflare to access your repositories.
7. Select the repository **theponce/LaKingNursery**.
8. Click **Begin setup**.

## 2. Configure Build Settings

On the build configuration screen:

1. **Project name** -- leave as-is or set to `lakingnursery` (this determines your `*.pages.dev` subdomain).
2. **Production branch** -- set to `main`.
3. **Framework preset** -- select **Astro** from the dropdown. This should auto-fill the build command and output directory, but verify them manually:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Expand **Environment variables (advanced)**.
5. Add one variable:
   - **Variable name:** `NODE_VERSION`
   - **Value:** `22`
6. Click **Save and Deploy**.

The first build will take 1-3 minutes. Wait for it to complete. You will get a live preview at `https://lakingnursery.pages.dev` (or whatever project name you chose).

## 3. Add Custom Domain (lakingnursery.com)

### If lakingnursery.com is already on Cloudflare DNS

1. Go to **Workers & Pages** > your project > **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `lakingnursery.com` and click **Continue**.
4. Cloudflare will automatically add the required CNAME record. Click **Activate domain**.
5. Repeat for `www.lakingnursery.com`.
6. Both should show status **Active** within a few minutes.

### If lakingnursery.com is with an external registrar

1. First, transfer DNS management to Cloudflare:
   - In the Cloudflare dashboard, click **Add a site** (top nav) and enter `lakingnursery.com`.
   - Choose the **Free** plan.
   - Cloudflare will scan existing DNS records. Review them and confirm.
   - Cloudflare will give you two nameservers (e.g., `ada.ns.cloudflare.com`, `jim.ns.cloudflare.com`).
   - Log into your domain registrar and replace the existing nameservers with the Cloudflare ones.
   - Wait for propagation (can take up to 24-48 hours, usually much faster).
2. Once the domain is active on Cloudflare, follow the "already on Cloudflare DNS" steps above.

### SSL/TLS Settings

1. Go to **SSL/TLS** in the left sidebar for your `lakingnursery.com` zone.
2. Set encryption mode to **Full (strict)**.
3. Under **Edge Certificates**, confirm **Always Use HTTPS** is toggled **on**.
4. Confirm **Automatic HTTPS Rewrites** is toggled **on**.

### www Redirect

To redirect `www.lakingnursery.com` to `lakingnursery.com`:

1. Go to **Rules** > **Redirect Rules** in the left sidebar.
2. Click **Create Rule**.
3. Name it `www to apex`.
4. Under **When incoming requests match...**, set:
   - **Field:** Hostname
   - **Operator:** equals
   - **Value:** `www.lakingnursery.com`
5. Under **Then...**, select **Dynamic** redirect:
   - **Expression:** `concat("https://lakingnursery.com", http.request.uri.path)`
   - **Status code:** 301 (permanent)
   - **Preserve query string:** enabled
6. Click **Deploy**.

---

## 4. Auto-Deploy Behavior

Once connected, Cloudflare Pages works like this:

- **Production deploys:** Every push to `main` automatically triggers a new build and deploy to `lakingnursery.com`. No manual action needed.
- **Preview deploys:** Every push to any other branch, or any pull request, gets its own preview URL (e.g., `https://feature-branch.lakingnursery.pages.dev`). This is useful for reviewing changes before merging.
- **Build logs:** Available under **Workers & Pages** > your project > **Deployments**. Check here if a build fails.
- **Rollbacks:** You can instantly roll back to any previous deployment from the Deployments tab. Click the three-dot menu on a previous deploy and select **Rollback to this deployment**.

---

## 5. Post-Deploy Checklist

Run through these after the first successful production deploy.

### 5a. Verify sitemap

1. Open `https://lakingnursery.com/sitemap-index.xml` in your browser.
2. Confirm it lists a child sitemap (e.g., `sitemap-0.xml`).
3. Open the child sitemap and confirm it contains URLs for all published pages and blog posts.

### 5b. Verify robots.txt

1. Open `https://lakingnursery.com/robots.txt`.
2. Confirm it is not blocking any pages that should be indexed.
3. Confirm it references the sitemap URL.

### 5c. Check Open Graph tags

1. Go to [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) and paste `https://lakingnursery.com`.
2. Click **Debug** (or **Scrape Again** if it was cached).
3. Verify the title, description, and image preview look correct.
4. Optional: Check Twitter/X cards at [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator).

### 5d. Submit sitemap to Google Search Console

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console).
2. Add `https://lakingnursery.com` as a property (use the **URL prefix** method or **Domain** if DNS is on Cloudflare).
3. For Domain verification with Cloudflare DNS: add the TXT record Google provides to your Cloudflare DNS settings.
4. Once verified, go to **Sitemaps** in the left sidebar.
5. Enter `sitemap-index.xml` and click **Submit**.

### 5e. Test page speed

1. Run [https://pagespeed.web.dev/](https://pagespeed.web.dev/) against `https://lakingnursery.com`.
2. Check both **Mobile** and **Desktop** scores.
3. Address any flagged issues (image sizing, layout shift, unused CSS, etc.).

---

## 6. Note About Images

The site currently does not have final images in place. Placeholder or missing images are expected on the initial deploy. This is normal.

When images are added to the repo and pushed to `main`, Cloudflare Pages will automatically rebuild and deploy the updated site. No manual intervention needed -- just push to `main` and the build picks up the new assets.

---

## Quick Reference: Redeploying

| Action                         | What to do                                      |
|--------------------------------|-------------------------------------------------|
| Push code changes live         | Push to `main` on GitHub. Auto-deploys.         |
| Preview a branch               | Push to any non-main branch or open a PR.       |
| Roll back a bad deploy         | Deployments tab > previous deploy > Rollback.   |
| Trigger a manual rebuild       | Deployments tab > **Retry deployment**.          |
| Check build logs               | Workers & Pages > project > Deployments > click a deploy. |
