#Mean: Full stack JavaScript para aplicações web com MongoDB, Express, Angular e Node
#Flávio Almeida
#http://www.casadocodigo.com.br/products/livro-mean

#Fedora 21 -Kernel 3.19.7-200.fc21.x86_64
#mongodb installation instructions

#Pre-Flight Check

These instructions are intended for installing MongoDB on a single Fedora 21 node.
I’ll be working from a Liquid Web Self Managed Fedora 21 server, and I’ll be logged in as root. 

#Step #1: Add the MongoDB Repository

For a refresher on editing files with vim see: New User Tutorial: Overview of the Vim Text Editor

vim /etc/yum.repos.d/mongodb.repo

Option A: If you are running a 64-bit system, add the following information to the file you’ve created, using i to insert:

[mongodb]
name=MongoDB Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
gpgcheck=0
enabled=1

Then exit and save the file with the command :wq . You should see an output very similar to the following image:

Option B: If you are running a 32-bit system, add the following information to the file you’ve created, using i to insert:

[mongodb]
name=MongoDB Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/i686/
gpgcheck=0
enabled=1

Then exit and save the file with the command :wq .
#Step #2: Install MongoDB

As a matter of best practice we’ll update our packages:

yum -y update

At this point, installing MongoDB is as simple as running just one command:

yum -y install mongodb-org mongodb-org-server

#Step #3: Get MongoDB Running

Start-Up MongoDB

systemctl start mongod

Check MongoDB Service Status

systemctl status mongod

Start the MongoDB Service at Boot

systemctl enable mongod

Summary List of Status Statistics (Continuous)

mongostat

Summary List of Status Statistics (5 Rows, Summarized Every 2 Seconds)

mongostat --rowcount 5 2

Enter the MongoDB Command Line

mongo

By default, running this command will look for a MongoDB server listening on port 27017 on the localhost interface.

If you’d like to connect to a MongoDB server running on a different port, then use the –port option. For example, if you wanted to connect to a local MongoDB server listening on port 22222, then you’d issue the following command:

mongo --port 22222

Shutdown MongoDB

systemctl stop mongod



