# ssh-login-tracker-telegram
Script for logging on the server via ssh. When logging in, a message was sent with information in a telegram through a bot to the specified chat.
## How to use
- Сopy the repository `git clone https://github.com/minbbb/ssh-login-tracker-telegram.git`
- In the script **main.js** insert your *token* and *chatId*
- Edit the path to the script in the service file **ssh-login-tracker-telegram.service**
- Copy the service file **ssh-login-tracker-telegram.service** to **/etc/systemd/system/**
- Start the service with the command `systemctl start ssh-login-tracker-telegram.service`
- Enable the service with the command `systemctl enable ssh-login-tracker-telegram.service`, so that after restarting the server, the script itself turns on