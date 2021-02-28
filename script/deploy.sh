ssh ubuntu@aws_stage <<EOF
    cd ~/node-app
    git pull origin master
    curl -o- https://github.com/pg-devops/course2-project1-dockerizing-pipeline.git    | bash
    . ~/.nvm/nvm.sh
    nvm install v10.19.1
    npm install
    npm install -g nodemon pm2
    pm2 restart ecosystem.config.js
    exit
EOF
