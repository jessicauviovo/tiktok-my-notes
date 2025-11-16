# Deployment Guide - Render

This guide will help you deploy the TikTok Notes backend to Render.

## Prerequisites

Before deploying, ensure you have:
- A Render account (sign up at https://render.com)
- OpenAI API key
- ElevenLabs API key
- Your code pushed to a GitHub repository

## Deployment Steps

### Option 1: Deploy using render.yaml (Recommended)

1. **Connect your repository to Render**
   - Go to https://dashboard.render.com
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

2. **Set Environment Variables**
   - During setup, you'll be prompted to add environment variables
   - Add the following:
     - `OPENAI_API_KEY`: Your OpenAI API key
     - `ELEVENLABS_API_KEY`: Your ElevenLabs API key

3. **Deploy**
   - Click "Apply" to create the service
   - Render will build and deploy your backend automatically

### Option 2: Manual Deploy

1. **Create a new Web Service**
   - Go to https://dashboard.render.com
   - Click "New" → "Web Service"
   - Connect your repository

2. **Configure the service**
   - Name: `tiktok-notes-backend` (or your preferred name)
   - Runtime: `Python 3`
   - Build Command: `pip install -r backend/requirements.txt`
   - Start Command: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`

3. **Set Environment Variables**
   Go to the "Environment" tab and add:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `ELEVENLABS_API_KEY`: Your ElevenLabs API key

4. **Deploy**
   - Click "Create Web Service"
   - Wait for the build and deployment to complete

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key for GPT-4 summarization | Yes |
| `ELEVENLABS_API_KEY` | Your ElevenLabs API key for text-to-speech | Yes |
| `PORT` | Port to run the server on (automatically set by Render) | Auto |

## Post-Deployment

### 1. Verify Deployment
- Once deployed, Render will provide a URL (e.g., `https://tiktok-notes-backend.onrender.com`)
- Test the endpoint: `https://your-app-url.onrender.com/docs` to access FastAPI's interactive documentation

### 2. Update Frontend CORS Settings
- In `backend/main.py`, update the CORS `allow_origins` to include your frontend domain
- Change from `["*"]` to `["https://your-frontend-domain.com", "http://localhost:3000"]`

### 3. Update Frontend API URL
- Update your frontend code to point to the Render backend URL instead of `http://localhost:8000`

## Important Notes

### Ephemeral File System
- Render uses an ephemeral file system, meaning the `uploads/` directory is cleared on each deployment and restart
- Your app already handles this correctly by:
  - Creating the uploads directory dynamically (`os.makedirs("uploads", exist_ok=True)`)
  - Cleaning up uploaded files after processing (`os.remove(file_path)`)

### Cold Starts
- Free tier services on Render spin down after 15 minutes of inactivity
- The first request after inactivity may take 30-60 seconds to respond
- Consider upgrading to a paid plan for always-on service

### Logs
- View logs in the Render dashboard under the "Logs" tab
- Use logs to debug any deployment issues

## Troubleshooting

### Build Fails
- Check that all dependencies in `requirements.txt` are compatible
- Verify Python version in `runtime.txt` matches your local environment

### Application Crashes
- Check logs for error messages
- Verify environment variables are set correctly
- Ensure API keys are valid

### 502 Bad Gateway
- The app might be taking too long to start
- Check if the start command is correct
- Review logs for startup errors

## Updating Your Deployment

Render automatically redeploys when you push changes to your connected GitHub repository's main branch.

To manually trigger a deployment:
1. Go to your service in the Render dashboard
2. Click "Manual Deploy" → "Deploy latest commit"

## Support

- Render Documentation: https://render.com/docs
- FastAPI Documentation: https://fastapi.tiangolo.com
- OpenAI API: https://platform.openai.com/docs
- ElevenLabs API: https://docs.elevenlabs.io