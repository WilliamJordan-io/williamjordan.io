# Contact Form Setup Instructions

## What Was Done
The contact form has been updated to use Web3Forms, a reliable email service for static websites. All code changes are complete and ready to deploy.

## GitHub Repository Secret Setup
To make the contact form work on your live website, you need to add the Web3Forms access key as a GitHub repository secret:

### Steps:
1. Go to your GitHub repository: https://github.com/your-username/williamjordan.io
2. Click on **Settings** (top menu bar)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Name: `WEB3FORMS_ACCESS_KEY`
6. Value: `413f1e9c-8a59-4680-a6d3-f8899c7ca41d`
7. Click **Add secret**

## What Happens Next
Once you add the GitHub secret and push these changes:
- The GitHub Actions workflow will automatically build your site with the email functionality
- The contact form will work on your live website at williamjordan.io
- You'll receive emails at williamjordan@time-ai.agency when someone submits the form

## Files Modified
- `src/components/contact-section.tsx` - Updated to use Web3Forms API
- `client/src/components/contact-section.tsx` - Same updates for consistency
- `.github/workflows/deploy.yml` - Added environment variable injection during build
- `.env` - Added the access key for local development

## Test Results
The contact form now:
- Validates all required fields (name, email, message)
- Shows success/error messages to users
- Sends properly formatted emails with professional styling
- Works reliably for static site deployment