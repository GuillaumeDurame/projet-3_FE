function LoginPage() {
  return (
    <div>
      <form method="post">
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" />
        </label>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;
