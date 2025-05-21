4/28/20265
    Add your actual images to this folder with these names:
    innovation-hub.jpg
    startup-support.jpg
    training.jpg
    research.jpg
    networking.jpg
    library.jpg


    # NGROK SETUP & USAGE NOTE

# 1. Install ngrok globally
npm install -g ngrok

# 2. Add auth token (get it from https://dashboard.ngrok.com)
ngrok config add-authtoken <YOUR_AUTH_TOKEN>

# 3. Create config file at ~/.ngrok2/ngrok.yml with content:

authtoken: <YOUR_AUTH_TOKEN>
tunnels:
  frontend:
    addr: 4200
    proto: http
  backend:
    addr: 5000
    proto: http

# 4. Start tunnels:
ngrok start --all
# Or for single tunnel:
ngrok start frontend
ngrok http 5000
https://3089-196-188-225-153.ngrok-free.app
