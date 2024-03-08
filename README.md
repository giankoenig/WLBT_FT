

# WLBT FE

---

## End Points

- users: name, email, password, packages, sessions
- sessions: title, description, location, date, slots
- packages: title, description, validity, price

/api/users/

| API               | Description               |
| ----------------- | ------------------------- |
| GET .../          | get all users             |
| POST .../signup   | sign up and log in user   |
| POST .../login    | login in user             |

/api/sessions/
- GET .../              get all sessions
- GET .../:uid          get all sessions booked by a user
- POST .../             create new session (only for admin)
- DELETE .../:sid       deleted session (only for admin)
- PATCH .../:sid        edit session
                            admin: change all settings
                            user: remove from session

/api/packages/
- GET .../              get all packages
- GET .../:uid          get all bought packages
- POST .../             create package (only for admin)
- DELETE .../:pid       delete package
- PATCH .../:pid        edit package