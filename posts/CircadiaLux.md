---
title: "CircadiaLux: Revolutionizing Healthcare Lighting with ML, IoT, and Human-Centered Design"
date: 2025-07-23
description: "How we built an intelligent lighting system that combines machine learning, IoT devices, and modern web technologies to transform patient recovery in hospitals by respecting our natural biological rhythms."
cover: /circadialux/cover.jpg
---

**How we engineered an intelligent lighting system to support healing and well-being in hospital environments**

---

## 🌅 The Problem: When Hospital Lights Hurt Recovery

Hospitals are meant to be healing environments—but harsh, cold lighting often works against recovery. Most facilities use static fluorescent lights 24/7, ignoring how light affects our **circadian rhythm** and overall health.

Our circadian rhythms—our internal 24-hour biological clock—are primarily regulated by light exposure. In nature, we're exposed to cool, blue-enriched light during the day and warm, dim light in the evening. This natural pattern helps regulate sleep, hormone production, and countless other biological processes.

Hospital lighting, however, tells a different story. Static, bright fluorescent lights shine at the same intensity and color temperature 24/7, creating an environment that actively disrupts patients' circadian rhythms.

Disrupted circadian rhythms in patients and staff can lead to:

- Poor sleep quality  
- Longer recovery times  
- Higher stress and medication needs  
- Compromised immune function

Light isn’t just visual—**it’s biological**. And in hospitals, it often becomes a hidden health risk.

---

## 💡 Our Vision: Smart Lighting That Supports Healing

**CircadiaLux** is our answer: a smart, adaptive lighting system that uses **machine learning**, **IoT devices**, and **cloud technology** to create lighting environments that:

- Mimic natural daylight cycles  
- Personalize lighting based on age, condition, and chronotype  
- Respond to real-time environmental feedback  

CircadiaLux is not just a lighting control system—it’s a biologically informed platform for **circadian alignment and healing**.

---

## 🔄 Why Lighting Matters in Healthcare

![CircadianLux Flow Diagram: Lighting Settings → Circadian Rhythm → Sleep → Healing](/circadialux/process.png)

> **Lighting directly influences circadian rhythms, which in turn affect sleep quality—and ultimately, the healing process.**

This chain is the core of our approach:

1. **Lighting Settings**  
2. Influence **Circadian Rhythm**  
3. Which determines **Sleep Quality**  
4. Directly impacting the **Healing Process**

By optimizing the first link ( light ) we improve everything that follows.

---

## 🛠️ CircadiaLux System Overview

### 🧭 Architecture at a Glance

![System Architecture of CircadiaLux showing ML pipeline, Supabase backend, IoT devices, and web dashboard](/circadialux/architectureDiagram.png)


### 🖥️ Web Interface

Built with **React**, **Vite**, and **TailwindCSS**, the web dashboard provides an intuitive interface designed specifically for healthcare professionals:

- Patient management with personalized profiles  
- Device monitoring and status overview 
- Secure role-based access (admin & caregiver roles)

### ☁️ Backend

**Supabase** serves as our backend solution, delivering scalable, real-time infrastructure:

- 🔐 PostgreSQL database for storing patient data and lighting preferences  
- 🔐 Real-time authentication with role-based security  
- 📡 Webhook triggers that automatically generate new lighting recommendations  
- �️ API endpoints for seamless communication between components

### 🤖 Machine Learning for Personalized Lighting

Our ML component uses a **Random Forest Regressor** model that achieves **96.2% accuracy** in predicting optimal lighting parameters. The system predict optimal lighting parameters for each patient based on:

- Age  
- Chronotype  
- Gender 
- Sleep information

We generate **48 lighting adjustments per day** (every 30 minutes), fine-tuned to:

- Color Temperature (CCT)  
- Brightness Intensity  

To avoid harsh transitions, we apply **smoothing algorithms** to create gradual, comfortable lighting shifts.

### 🔌 Embedded IoT Hardware

Each lighting controller is built around the **ESP32** microcontroller, equipped with:

- Dual-channel LED control (warm/cool) via MOSFETs  
- Color sensor feedback for accurate CCT/intensity reproduction  
- Custom WiFi management with user-friendly setup  

---

## 🌍 Real-World Impact

The implications of CircadiaLux extend far beyond just better lighting:

### 🧑‍⚕️ For Patients
- **Improved sleep quality** through proper circadian entrainment  
- **Potentially faster recovery times** through optimized healing environments  
- **Reduced need for sleep medications** and sedatives  
- **Better overall comfort and well-being** during hospital stays  

### 🏥 For Healthcare Facilities
- **Energy savings** through intelligent brightness control   
- **Higher patient satisfaction** scores 

---

## 🔓 Open Source and Community

CircadiaLux is proudly **open source** and available on GitHub. We believe that improving human health through better lighting should be accessible to researchers, developers, and healthcare facilities worldwide.

The project demonstrates how modern technologies—machine learning, IoT, and cloud services—can be combined to address real-world healthcare challenges. It's a testament to what's possible when we apply engineering principles to human-centered problems.

🔗 [Visit the Repository →](https://github.com/kavindalj/CircadiaLux)

Whether you're a researcher in chronobiology, a developer working in healthcare IoT, or simply passionate about tech for well-being, we'd love your input and collaboration.

---

## 🧠 Final Thoughts: Healing Through Light

**CircadiaLux isn’t just a lighting system—it’s a step toward more humane, intelligent healthcare environments.**

By combining embedded systems, ML, and design thinking, we created a system that supports patients not only physically—but biologically and emotionally too.

> “When technology aligns with biology, it empowers healing.”

The future of healthcare lighting is **personalized**, **intelligent**, and **human-centered**—and CircadiaLux is helping build it, one patient room at a time.

**👥 Want to connect, collaborate, or contribute? Reach out or star us on GitHub.**  
📬 [GitHub → CircadiaLux](https://github.com/kavindalj/CircadiaLux)

---

### 🔗 Related Posts

If you enjoyed learning about CircadiaLux, you might also be interested in these related posts:

- **[My Self-Hosting Journey](https://blog.kavindalj.me/blog/mySelfHostingJourney)** - Explore how I built my home server infrastructure and self-hosted services, sharing similarities with the IoT and backend architecture decisions in CircadiaLux.

- **[Building a Reliable Backup System for My Multi-Device Setup](https://blog.kavindalj.me/blog/buildingAReliableBackupSystem)** - Learn about system reliability and data management strategies that inform the robust architecture principles used in CircadiaLux.

- **[Building a Safe and Realistic Hacking Lab](https://blog.kavindalj.me/blog/buildingASafeAndRealisticHackingLab)** - Discover network architecture and security considerations that parallel the IoT device management and security features in CircadiaLux.

---