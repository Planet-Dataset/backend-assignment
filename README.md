<img src="https://user-images.githubusercontent.com/28607713/139576077-5c322bfa-d71b-414b-9b63-ff4c53ec9a8d.png"
     alt="planet-logo-white-no-bg"
     width="120">

# Planet backend-assignment
Backend position skill assessment home assignment.

## Overview
This repository holds the basic project structure for implementing a NodeJS based API and service
used in a fictitious software solution that provides scrapping services.

Disclaimer: The purpose and usage of this repo is solely for insight adquisition regarding problem-solving,
and does not represent an existing and ongoing implementation task.

PD: We provide this structure as an starting point but you may discard it and approach the task in
any other way.

## Solution evaluation
We are in search for a backend developer who is capable of implementing API requirements, can work
databases and can design "future-proof" (if that trully exists) solutions.

Therefore we will evaluate the assignment:
- Home assignment completition: Whether you completed all tasks and how you prioritized time.
- Code versioning: We are not too picky regarding Git, but do appreciate feature branchs and a clean
  repo history that could help us understand how you approached this assignment.
- Task-specific implementation details:
  - ...
- Extras: Providing extra documentation, identifying any improvement opportunity (even if you didn't
  implement it), or having a fluent communication during your process (just let us know how you are
  doing) will be positively taken into account.

## Context

## Tasks

## Repository structure
The code is laid down in a monorepo fashion with make commands for easier admin tasks. The two services
that you can find find are the **api** and **service** services.

The **api** service is an Express server with hot code reloading, while the **service** service is a
generic Node setup that runs the script periodically and that you may use -or not- for any recurring
process; this later service can be run manually without the cron job.

- The _services/api_ directory holds the code for the API. The following make commands are available:
     - `backend-build` Builds the corresponding Docker images.
     - `backend-up` Raises the platform.
     - `backend-up-slim` Raises the platform without the service _service_ running in the background (just the db and API).
     - `backend-down` Shuts down the platform. _Requires having the platform up (you can use make backend-up)_
     - `backend-dump` Dumps the database contents to a _dump_ folder. _Requires having the platform up (you can use make backend-up)_
     - `backend-load` Loads the database contents from a _dump_ folder. _Requires having the platform up (you can use make backend-up)_
     - `backend-dbshell` Connects to the database shell. _Requires having the platform up (you can use make backend-up)_
     - `backend-test` Runs the API tests with database dump and restore. _Requires having the platform up (you can use make backend-up)_
---

# backend-assignment
Backend position skill assessment home assignment.
