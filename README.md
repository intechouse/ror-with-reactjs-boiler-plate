# Boiler-Plate Web Application

### **`RubyOnRails`** Application Dependencies

- Ruby version, `2.7.2`
- Rails version, `6.0.3.4`
- Database used, `postgresql`
- Front used, `ReactJS`, using gem [React-Rails](https://github.com/reactjs/react-rails)

### **`ReactJS`** Application Dependencies

- `Node` version, `14.16.0`.
- `React` version, `17.0.1`.
- `History` version, `4.10.1`.
- `React-DOM` version, `17.0.1`.
- `React-Redux` version, `7.2.2`.
- `React-Router-DOM` version, `5.2.0`.
- `Redux` version, `4.0.5`.
- `Redux-Thunk` version, `2.3.0`.

### Installation Steps

1. Install `RVM`.
2. Install `Ruby` version `2.7.2`.
3. Create a `gemset`.
4. Run `bundle install`.
5. Run `yarn install`.
6. Install `postgresql`.
7. Create a user with username `postgres` and password `postgres`.
8. Create database `auiskey_web_development`.
9. Create `config/master.key`, `config/credentials/development.key`, `config/credentials/staging.key`, and `config/credentials/production.key`.
10. Ask the developer about the `KEYS`.
11. Start the server, `rails s`.
12. To start `webpacker`, (for hot & fast reloading), run `./bin/webpack-dev-server` inside project.