# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

A few things happen. First, our browser looks up who 'techtonic group' is, the IP address corresponding to the human readable URL. Then it goes to that server, and asks for the root page or home page of that site.

## From start to finish how does that data reach you to be rendered in the browser?

The browser asks my ISP for the address, which it gets from Google. Then my browser asks the techtonicgroup server: What is your home page? It then sends the home or index page to the browser

## What code is rendered in the browser?

The HTML, CSS, and JS of the website

## What is the server-side code’s main function?

The server side code's job is to respond to and process input recieved from client side browsers

## What is the client-side code’s main function?

To give the text (HTML) file it's proper apperance and functionality

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

The client side code is created once in each web browser connected at any one time.

## How many instances of the server-side code are available at any given time?

Technically, only one. But many sites are far too large or active to have only one server. Instead, they make many copies over many servers to serve the large number of client side connections

## What is runtime?

The instant that the page or executable is opened.

## How many instances of the the databases connected to the server application are created?

The database has one instance, with as many open connections as there are servers in the cluster. There may be one, or thousands.
