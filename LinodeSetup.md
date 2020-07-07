# Linode Setup

## Step 1
Set up linode on Linode dashboard and wait for it to be finalised.

##Step 2
Run the following to update packages:

`sudo apt update && apt upgrade`

##Step 3
Set up Docker: 

Credit for this step goes to: https://www.linode.com/docs/applications/containers/how-to-install-docker-and-pull-images-for-container-deployment/

Run the following commands:

Remove existing versions:

`sudo apt remove docker docker-engine docker.io`

Ensure you have required packages to allow use of Docker::

`sudo apt install apt-transport-https ca-certificates curl software-properties-common gnupg`

Add Docker's GPG key:

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

Verify the fingerprint of the GPG key:

`sudo apt-key fingerprint 0EBFCD88`

You should see something similar to the below:

````
pub   rsa4096 2017-02-22 [SCEA]
          9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) 
sub   rsa4096 2017-02-22 [S]
````

Add the stable Docker repo:

`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`

if errors, use:

`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable edge test"`

Update packages and install Docker CE:

````
sudo apt update
sudo apt install docker-ce
````

Add your limited Linux user account to the docker group:

`sudo usermod -aG docker $USER`

Test to see if its working:

`docker run hello-world`

##Step 4
Install Git.

Install git package:

`sudo apt-get install git -y`

Configure username, replacing USERNAME with your Git username:

`git config --global user.name "USERNAME"`

Configure email, replacing email@example.com with your Git email:

`git config --global user.email "email@example.com"`

##Step 5
Generate new SSH Key to be added to Git client.

Credit for this step goes to: https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Generate key, replacing email@example.com:

`ssh-keygen -t rsa -b 4096 -C "email@example.com"`

Follow on screen instructions to select file to store key in (enter to accept default location), and to setup a password.

Setup ssh agent:

`eval "$(ssh-agent -s)"`

If the file doesn't exist, create the file.

`touch /root/.ssh/config`

Open the config file:

`vim /root/.ssh/config`

Paste the following, replacing location of file if you never accepted the default location / name:

````
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
````

Add key to ssh-agent, replacing location to file if you are not using the default location / name.

`ssh-add /root/.ssh/id_rsa`

Install package to allow you to copy key to clipboard:

`sudo apt-get install xclip`

Copy public key to clipboard, replacing location to file if you are not using default location / name:

`xclip -sel clip < /root/.ssh/id_rsa.pub`





