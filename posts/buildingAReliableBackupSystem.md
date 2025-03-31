---
title: "Building a Reliable Backup System for My Multi-Device Setup"
date: "2025-04-01"
description: In this blog post, I share how I built a reliable backup system to protect my data across multiple devices, including my ThinkPad T480 (Arch Linux), MacBook Air M1, and Android smartphone. I explain how I use Syncthing for seamless file synchronization, Duplicati for automated nightly backups, and a dedicated NVMe SSD in my ThinkPad for on-site backups. If you're looking for a secure, automated, and redundant backup solution, this guide will help you get started! 🚀
cover: /buildingAReliableBackupSystem/cover.png
---

# Building a Reliable Backup System for My Multi-Device Setup

In the ever-evolving world of technology, I find myself constantly experimenting with different operating systems and devices. While this is exciting, it also presents a challenge: data protection and availability. Losing important files due to hardware failure, accidental deletion, or even system corruption is not an option. So, I decided to build a robust backup system that ensures my data is safe, accessible, and redundant.

## My Setup: A Diverse Ecosystem

I primarily use two laptops and a smartphone:

- **Primary Device**: A Lenovo ThinkPad T480 running Arch Linux with Hyperland.
- **Secondary Device**: A MacBook Air M1 for additional workflows.
- **Mobile Companion**: An Android smartphone.

Since I work with multiple operating systems and enjoy tinkering with different devices, having a well-structured backup strategy became crucial. I needed a solution that would allow seamless synchronization and reliable backup without unnecessary complexity.

## The Backup Server: The Heart of My System

To centralize my backups, I repurposed an old laptop with two hard drives and turned it into a dedicated **backup server**. This machine runs **[Syncthing](https://syncthing.net/)**, a fantastic open-source tool that enables seamless file synchronization across my devices. The best part? Syncthing works locally and remotely without requiring router port forwarding, thanks to its relay feature.

### Midnight Mirroring with Duplicati

To ensure that even my synchronized data is protected, I run **[Duplicati](https://www.duplicati.com/)** on my backup server. Every night at midnight, Duplicati takes a snapshot of all synced files and backs them up to the second hard disk. This way, even if files get accidentally modified or deleted, I have a reliable version stored securely.

## On-Site Backup: A Second Layer of Protection

Since I spend most of my time at university, relying solely on my home backup server wasn’t enough. I needed an **on-site backup** solution that would be available on my primary device – my ThinkPad T480. So, I added a dedicated **NVMe SSD** to my laptop’s WWAN slot using an **[M.2 NVMe M-Key / M2 SATA B+M Key 2230 to 2242 Extension Adapter Card Converter](https://www.aliexpress.com/item/1005006832363079.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.1.485eZftQZftQzK&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=c2ca3f03-b5b9-4006-bdd5-82cfac1e3751&_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40050.354490.0,pvid:c2ca3f03-b5b9-4006-bdd5-82cfac1e3751,tpp_buckets:668%232846%238116%232002&pdp_ext_f=%7B%22order%22%3A%22202%22%2C%22eval%22%3A%221%22%2C%22sceneId%22%3A%2230050%22%7D&pdp_npi=4%40dis%21LKR%21854.70%21293.23%21%21%2120.85%217.15%21%402101584917434390873802934e1cee%2112000038446274280%21rec%21LK%21%21ABXZ&utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A)**. This additional drive now serves as my on-the-go backup storage.

To manage this backup effectively, I use:

- **[Timeshift](https://github.com/teejee2008/timeshift)** – for system snapshots, ensuring I can revert my OS in case of major issues.
- **[Pika Backup](https://flathub.org/apps/org.gnome.World.PikaBackup)** – for user data, keeping my important files safe and easily restorable.

## A Backup System That Works

With this multi-layered approach, I now have a system that covers all bases:

- **Local backups** on my ThinkPad for immediate recovery.
- **Synced data** across all my devices via Syncthing.
- **Remote backup server** storing multiple snapshots via Duplicati.

By implementing this strategy, I’ve built a **reliable, automated, and secure** backup solution that keeps my data safe while I focus on my work. If you haven’t set up a proper backup system yet, consider taking steps to safeguard your data today. As the old saying goes:

> *"There are two types of people: those who have lost data and those who will."*

Which one will you be?

