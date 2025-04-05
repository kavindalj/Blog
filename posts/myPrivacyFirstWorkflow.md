---
title: "My Privacy-First Workflow: Passwords, SSH, 2FA & Secure Browsing"
date: "2025-04-05"
description: "Learn how I built a privacy-focused, fully offline security workflow using open-source tools like KeePassXC, Syncthing, Aegis Authenticator, and Firefox. This guide covers secure password management, SSH key handling, two-factor authentication, and browser hardening — all without relying on the cloud."
cover: /myPrivacyFirstWorkflow/cover.png
---

In today's hyper-connected world, online account security isn’t just a good habit — it’s survival. From passwords to SSH keys and browsers to two-factor authentication, I’ve recently rethought and rebuilt my digital security stack from the ground up. Here's a breakdown of how I'm keeping things secure **without relying on cloud-based services**.

## Password Management: No More Reuse, No More Worries

We all know we should use **unique, strong passwords** for every account. But let's be real — memorizing all of them? Not happening.

Cloud-based password managers? I just can’t bring myself to trust them. Too many have suffered data breaches. That’s when I found [**KeePassXC**](https://keepassxc.org/).

- ✅ **Offline** & open-source  
- ✅ Cross-platform  
- ✅ **Secure SSH key integration**  
- ✅ Works great with [**Syncthing**](https://syncthing.net/) for decentralized sync across my devices  

Now, not only are all my credentials stored in one encrypted database, but my **SSH keys** are safely managed and integrated directly through KeePassXC’s SSH agent support.

## Two-Factor Authentication (2FA): Ditch SMS, Go Time-Based

SMS and email-based 2FA might seem okay, but they’re vulnerable to **SIM swapping and phishing**. I chose to go with **TOTP-based** authentication instead — a method that’s more resilient and doesn’t rely on your phone number or inbox.

TOTP (Time-Based One-Time Password) apps use your **device’s time** and a **shared secret key** to generate temporary login codes. These apps can be either **online or offline**. I chose to go fully offline with [**Aegis Authenticator**](https://getaegis.app/), an open-source, secure alternative.

- ✅ Fully **offline**  
- ✅ **Open-source**  
- ✅ Encrypted backups  
- ✅ Sleek, minimal UI  

I just scan the QR code or input the secret manually once, and I’m set. No ads. No tracking. Just security.

## Syncing Secrets: Decentralized & Private

Most people back up their password vaults to Google Drive or iCloud.

I don’t.

Instead, I use [**Syncthing**](https://syncthing.net/) — a peer-to-peer file syncing tool that works over my local network or encrypted over the internet.

It keeps my KeePassXC database synced across my Linux laptop, Macbook, my Android phone, and even my backup server — all **without touching a third-party cloud**.

## Secure Browsing: Cookies, Containers & Control

Even with strong passwords and 2FA, your browser can be a huge attack vector.

Here’s how I lock mine down:

- Use [**Firefox**](https://www.mozilla.org/en-US/firefox/) or [**Brave**](https://brave.com/) – both **open-source and privacy-respecting**
- Enable **auto-deletion of cookies and sessions** on browser close to stop session hijacking
- Use **Firefox Containers** (via [**Multi-Account Containers**](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)) to isolate logins and prevent cross-site tracking

Now each of my online identities — personal, work, projects — lives in its own private sandbox.

## Final Thoughts

Security isn't a one-time setup. It's a mindset. By going fully open-source and offline where possible, I’ve built a system that gives me:

- ✅ Control  
- ✅ Transparency  
- ✅ Peace of mind  

No cloud logins. No third-party trust. Just my own system, secured by design.

### Tools I Use

- [KeePassXC](https://keepassxc.org/)
- [Syncthing](https://syncthing.net/)
- [Aegis Authenticator](https://getaegis.app/)
- [Firefox](https://www.mozilla.org/en-US/firefox/) / [Brave](https://brave.com/)
- [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)

Stay private, stay secure. 🛡️
