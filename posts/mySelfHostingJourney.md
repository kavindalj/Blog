---
slug: test
title: My Self-Hosting Journey
date: 2022-08-30
cover: /mySelfHostingJourney/cover.webp
description: From an old laptop to a full-fledged home lab—this is my journey into self-hosting and networking. Join me as I experiment with Proxmox, Docker, Pi-hole, and more, turning curiosity into hands-on experience. Whether it's hosting services, securing networks, or planning future upgrades, this blog is all about learning by doing. Welcome to my self-hosting adventure!
---

# My Self-Hosting Journey

## How It All Started

It all began when I watched a [Linus Tech Tips](https://www.youtube.com/user/LinusTechTips) server video and discovered my love for servers. This led me to self-learn about servers and networking. I also studied [CCNA](https://en.wikipedia.org/wiki/CCNA) concepts, though I did not pursue certification. Eventually, I ventured into self-hosting and home servers.

## Building My First Home Lab

With an old laptop (Intel i3 4th Gen, 4GB RAM) as my hardware, I decided to turn it into a home server. The laptop was headless, and I serviced and cleaned it myself before starting my self-hosting journey. After some research, I learned about Proxmox, a Type 1 hypervisor, and installed it as the foundation of my home lab.

![my server](/mySelfHostingJourney/server.jpg "A server image")

## Services and Applications

On my Proxmox server, I set up various services to create a functional and efficient home lab:

- **XPEnology**: Used as my NAS for file storage and management.
- **Pi-hole**: A network-wide ad blocker and DNS filtering service.
- **Heimdall**: An application dashboard to manage and access self-hosted services easily.
- **Kali Linux**: A virtual machine for experimenting with ethical hacking and networking tasks.
- **VSCode Server**: A remote development environment.
- **Small Websites**: Hosted some personal and experimental websites.
- **Backup Server**: For ensuring my important data is safely stored.
- **Portainer & Docker Services**: For managing and deploying containerized applications.

## Making My Services Accessible

To make my services available from anywhere, I set up a domain and used [Cloudflare Zero Trust tunneling](https://developers.cloudflare.com/cloudflare-one/). This allowed me to securely access my self-hosted websites and applications over the internet.

## Future Plans

While my current hardware has limitations, my goal is to expand my home lab in the future. Some of my plans include:

- **Proxmox Cluster**: Setting up multiple nodes for better performance and redundancy.
- **Self-Hosted Router & Firewall**: For enhanced control over my network security and management.

## Screenshots

Here are some screenshots of my self-hosted services:

![proxmox](/mySelfHostingJourney/proxmox.png "proxmox")
![pi-hole](/mySelfHostingJourney/pi-hole.png "pi-hole")
![heimdall](/mySelfHostingJourney/heimdall.png "heimdall")
![media server](/mySelfHostingJourney/media.png "media server")
![drive](/mySelfHostingJourney/drive.png "drive")
![drive connect](/mySelfHostingJourney/nasD.jpg "drive connect")

Self-hosting has been a fun and rewarding experience, allowing me to learn so much about networking, servers, and security through hands-on practice. I look forward to growing my home lab even further!

