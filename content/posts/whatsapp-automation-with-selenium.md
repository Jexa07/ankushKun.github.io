+++
title = "Whatsapp Automation With Selenium"
date = "2022-08-17T14:02:23+05:30"
author = "Ankush Singh"
authorTwitter = "ankushKun_"
cover = ""
tags = ["Python", "Selenium", "Automation"]
keywords = ["Selenium", "Automation", "Whatsapp", "Autoresponder", "Chatbot", "Python"]
description = ""
showFullContent = false
readingTime = true
hideComments = false
draft = true
+++

# Motive behind creating this

So recently I moved into my University Hostel, and one of my roommates was having... _ahem_... _girl issues?_\
So I wrote him this whatsapp automation script that with continue checking for new messages from a specific contact
and respond whenever a new message is detected.

# Setup Development Environment

First lets create a virtual environment that will contain all our **pip** libraries and source code.
So open a terminal and use the following command (_$_ sign means the codeblock is meant to be run on a terminal, so dont put that in the actual command).

```bash
$ mkdir WhatsappAuto
$ cd WhatsappAuto
$ python3 -m venv venv
$ source ./venv/bin/activate
```

This will create a new folder with the name `WhatsappAuto`, change current directory, create a virtual environment in the folder `venv` and activate it.

Next install the libraries. We will be using `Selenium` for automation and `Chatterbot` liibrary for generating responses from new messages.

```bash
$ pip3 install selenium chattertbot
```

Now visit [chromium.org](https://chromedriver.chromium.org/downloads) and download the chrome webdriver for selenium according to your platform.

Create an `src/` folder, which will contain our source code and the chrome webdriver. Also create a python file `automate.py` inside `src`.

```bash
$ mkdir src
$ cd src
$ touch automate.py
```

# Time to write code

<div style="
display:flex;
flex-direction:row;
">

<div style="margin:5px;">

Open `automate.py` with your favourite code editor (_neovim 🔫_) and import necessasary libraries.

</div>
<img src="https://thumbs.gfycat.com/AngelicConcreteHypsilophodon-size_restricted.gif" width="300px" style="margin:5px;"></img>

</div>

```python
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
```

Create a variable with the name of the person to who you want to autorespond on whatsapp. (Should be same as how you have them in your contact list)

```python
NAME = "Ankush Singh" # I am using my name as an example
```

Create and train the chatbot which will generate the responses.

```python
chatbot = ChatBot(NAME)
# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)
# Train the chatbot based on the english corpus
trainer.train("chatterbot.corpus.english")
```

Next we want to setup Selenium, start whatsapp web and login using our whatsapp account.

```python
# Configure options to save usaer data so we dont have to login everytime we run the script
options = webdriver.ChromeOptions()
options.add_argument("user-data-dir=<Your_browser_user_profile>")

# Use the chromedriver we downloaded earlier
driver = webdriver.Chrome(service=Service("./chromedriver"), options=options)

print("Opening Whatsapp") # Open whatsapp web
driver.get("https://web.whatsapp.com")

# Wait until the user has scanned the qr and logged in
input("Press enter when whatsapp has loaded ")
```

Now we need couple of functions:

- Send message to contact.
- Check for unread messages from contact.
- Get last message from the chat.

```python
def send_message(text):
    print(f"Opening chat for {NAME}")
    user = driver.find_element(by=By.XPATH,value=f'//span[@title="{NAME}"]')
    user.click()
    time.sleep(2)
    messages = driver.find_elements(by=By.XPATH, value=f'//div[@class="_22Msk"]')
    print(messages[-1])
    print("Clicking text box")
    box = driver.find_element(by=By.XPATH, value=f'//div[@title="Type a message"]')
    box.click()
    # msg = random.choice(MESSAGES)
    msg = str(text)
    print(f"Typing {msg}")
    box.send_keys(msg)
    print("Clicking send")
    time.sleep(2)
    send_btn = driver.find_element(by=By.XPATH, value=f'//button[@data-testid="compose-btn-send"]')
    send_btn.click()
    time.sleep(3)
```

```python

```
