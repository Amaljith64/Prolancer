# Prolancer - A Freelancer Website Clone

Prolancer is a full-featured freelancer website clone built with Django RestAPI for the backend, React for the frontend, and Postgres as the database. It is designed to provide a platform for clients to find and hire freelancers for various projects and for freelancers to find and bid on projects that match their skillset.

## Features
- Two user types: client and freelancer
- Clients can buy services provided by freelancers and post jobs
- Freelancers can bid on the jobs posted by clients
- Rating system for the services purchased by clients
- Membership plans (Basic, Standard and Premium) for both clients and freelancers
- Email OTP verification for added security
- Payment methods: Paypal and Stripe
- Chatting feature with Web Sockets and Channels
- Admin panel for managing the website
- Search and filter options for clients and freelancers
- Portfolio section for freelancers to showcase their work

## Technologies
- Django RestAPI
- React
- Redux
- Postgres
- Web Sockets and Channels

## Screenshots


![Prolancer Screenshot](https://amaljith64.github.io/Amaljithportfolio/assets/img/Project%202.png)


## Installation

Clone the repository and install the dependencies:

- `git clone https://github.com/Amaljith64/Prolancer.git`
- `cd backend`
- `pip install -r requirements.txt`


Create a new database and update the settings in the `settings.py` file.

Run the migrations:
- `python manage.py makemigrations`
- `python manage.py migrate`


Run the development server:
- `python manage.py runserver`


## Contribution

We welcome contributions to this project. If you're interested in contributing, please submit a pull request.

## License

Prolancer is open-source and licensed under the [MIT License](LICENSE).







