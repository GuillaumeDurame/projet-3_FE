function SignupPage() {
  return (
    <div>
      <form method="post">
        <label htmlFor="username">
          Username
          <input type="username" name="username" id="username" />
        </label>

        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" />
        </label>

        <label htmlFor="description">
          Description
          <input type="description" name="description" id="description" />
        </label>

        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}

export default SignupPage;
