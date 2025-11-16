# Vercel Deployment Guide - Frontend

This guide will help you deploy the TikTok Notes frontend React app to Vercel.

## Prerequisites

Before deploying, ensure you have:
- A Vercel account (sign up at https://vercel.com)
- Your code pushed to a GitHub repository
- Backend already deployed on Render at `https://tiktokify-my-notes.onrender.com`

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New..." → "Project"

2. **Import Your Repository**
   - Click "Import Git Repository"
   - Select your GitHub repository: `jessicauviovo/tiktok-my-notes`
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset:** Create React App
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (automatically detected)
   - **Output Directory:** `build` (automatically detected)
   - **Install Command:** `npm install` (automatically detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build and deployment to complete (usually 1-2 minutes)
   - Vercel will provide a URL like: `https://tiktok-my-notes.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select your project settings
   - Vercel will build and deploy your app

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Configuration Files

### vercel.json
The `vercel.json` file has been created for you with the following configuration:
- Uses static build for Create React App
- Sets output directory to `build`
- Configures routing for SPA (Single Page Application)

## Post-Deployment

### 1. Verify Deployment
- Once deployed, Vercel will provide a URL (e.g., `https://tiktok-my-notes.vercel.app`)
- Visit the URL to test your application
- Test the audio generation feature to ensure backend connectivity works

### 2. Custom Domain (Optional)
To add a custom domain:
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 3. Environment Variables (If Needed)
Currently, your frontend doesn't use environment variables, but if you need to add them:
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables

## Important Notes

### Automatic Deployments
- Vercel automatically deploys when you push to your main/master branch
- Preview deployments are created for pull requests
- Each deployment gets a unique URL

### Build Optimization
- Vercel optimizes your React build automatically
- Static assets are served via Vercel's global CDN
- Images and fonts are automatically optimized

### Backend Connection
- Your frontend is already configured to connect to: `https://tiktokify-my-notes.onrender.com`
- Make sure your Render backend allows CORS from your Vercel domain
- Update CORS settings in `backend/main.py` if needed

### Cold Starts (Render Free Tier)
- Since your Render backend is on free tier, it may spin down after 15 minutes of inactivity
- First request after inactivity may take 30-60 seconds
- Consider adding a loading message or health check

## Updating CORS Settings

After deployment, update your backend CORS settings for production:

1. **Edit `backend/main.py`:**
   ```python
   app.add_middleware(
       CORSMiddleware,
       allow_origins=[
           "https://your-vercel-url.vercel.app",
           "http://localhost:3000"  # for local development
       ],
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```

2. **Commit and push to GitHub** - Render will automatically redeploy

## Troubleshooting

### Build Fails
- Check that all dependencies in `package.json` are correct
- Ensure build command is `npm run build`
- Check build logs in Vercel Dashboard for specific errors

### Page Not Found (404)
- Verify `vercel.json` routing configuration
- Ensure output directory is set to `build`

### Backend Connection Issues
- Verify backend URL is correct in `src/components/PageTwo.jsx`
- Check CORS settings in backend
- Ensure backend is running on Render
- Check browser console for CORS errors

### Styling Issues
- Ensure Tailwind CSS is building correctly
- Check that `tailwind.config.js` is properly configured
- Verify PostCSS configuration

## Performance Tips

1. **Enable Analytics** (optional)
   - Go to your project in Vercel Dashboard
   - Navigate to "Analytics" tab
   - Monitor performance and user metrics

2. **Monitor Build Times**
   - Check deployment logs for slow builds
   - Optimize dependencies if needed

3. **Optimize Assets**
   - Compress images before uploading to repository
   - Use appropriate image formats (WebP, PNG, JPEG)

## Continuous Deployment

Vercel automatically:
- Deploys every push to your main branch
- Creates preview deployments for pull requests
- Runs builds in isolated environments
- Provides instant rollbacks if needed

## Useful Commands

```bash
# Deploy to production
vercel --prod

# List all deployments
vercel ls

# View logs
vercel logs [deployment-url]

# Open project in browser
vercel open

# Remove a deployment
vercel rm [deployment-url]
```

## Support

- Vercel Documentation: https://vercel.com/docs
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Community Support: https://github.com/vercel/vercel/discussions

## Next Steps

1. ✅ Push your code to GitHub
2. ✅ Deploy to Vercel using the dashboard
3. ✅ Test your deployed application
4. ✅ Update backend CORS settings with your Vercel URL
5. ✅ (Optional) Add custom domain
6. ✅ Share your app!

Your TikTok Notes app is now live! 🎉