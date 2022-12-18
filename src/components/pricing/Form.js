function SubscriptionForm({ title }) {
  return (
    <>
      <div>
        <h3>{title}</h3>
      </div>
      <form>
        <div>
          <label htmlFor=''>Name</label>
          <input type='name' />
        </div>
        <div>
          <label htmlFor=''>Email</label>
          <input type='email' />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input type='password' />
        </div>
        <div>
          <label htmlFor=''>Payment</label>
          <input type='text' />
        </div>
      </form>
    </>
  );
}
export default SubscriptionForm;
