# DevTinder

- Created a Vite + React application
- Remove unnecessary code and create a hello word app
- Install Tailwind CSS
- Install Daisy UI
- Add Navbar component to App.jsx
- Create a Nabar.jsx seperate component file
- Install react router dom
- Create BrowserRouter > Routes >Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a footer
- Create a login page
- Install axios
- CORS - install cors in backend => add middleware to with configuration: origin,credentials:true
- Whenever you are making an api call so pass axios=> {withCrendentiaals:true}
- install react--redux + @reduxjs/toolkit - https://redux-toolkit.js.org/tutorials/quick-start => configureStore => Provider  => createSlice=> add reducer to Store
- Add redux devtools in chrome
- Login and see if your data is comming properly in the store
- Navbar should update as the user logs in
- Refactor our code to add constants file + create a component folder
- You should not be able to access other routes without login
- If token is not present ,redireactuser to login page
- logout Feature
- Get the feed and add the feed in the store.
- build the user card on feed.
- Edit profile feature
- Show Toast Message on save of Profile
- New Page - See all my connections
- New Page - See all my connections requests
- Feature - Accept/Reject Connection Request
- Send/ignore the user card from Feed

Remaining

- SignUp New User
- E2E Testing


Body
    NavBar
    Route/ =>feed
    Route/login => Login
    Route/connections=>Connections
    Route/profile =>Profile


# Deployment
- Signup on AWS 
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-13-203-197-231.ap-south-1.compute.amazonaws.com
- Install Node version v24.3.0
- Git clone
- Frontend
    - npm install- dependencies install
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html/ 
    - sudo scp -r dist/* /var/www/html/
    - Enable port :80 of your instance 
- Backend
    - updated DB password
    - allowed ec2 instance public IP on mongodb server
    - npm install pm2 -g
    - pm2 start npm -- name "devTinder-backend" -- start
    - pm2 logs
    - pm2 list, flush <name>,pm2 stop <name>,pm2 delete <name>
    - config nginx -/etc/nginx/sites-available/default

    Frontend- http://13.203.197.231/
    backend- http://13.203.197.231/:7777/

    Domain name= devtinder.com => 13.203.197.231

    Frontend= devtinder.com
    Backend:devTinder.com:7777 => devTinder.com/api

    nginx config:
    server name 13.203.197.231;
 

        location /api/ {
            proxy_pass http://127.0.0.1:7777;

            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
    }
    

    - restart nginx -  sudo systemctl restart nginx






sudo nano /etc/nginx/sites-available/default
