const Question_2 = () => {


    const UserItem = (props)=>{
        return (
            <>
                {/* Your Code here */}
            </>
        )
    }

  return (
    <>
        <h1 className="text-center">User page</h1>
        <div className="text-light" style={{width:"50%", margin:"auto" ,backgroundColor:"ligth-gray"}}> 
        <form>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="city">City</label>
            <input type="text" className="form-control" id="city" placeholder="Enter your city" />
          </div>
          <div className="form-group">
            <label for="street">Street</label>
            <input type="text" className="form-control" id="street" placeholder="Enter your street" />
          </div>
          <div className="form-group">
            <label for="zipcode">Zip Code</label>
            <input type="text" className="form-control" id="zipcode" placeholder="Enter your zip code" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10"></div>
      <button type="submit" className="btn btn-success col-2 mt-2" >Add user</button>

      </div>
    

      <table class="table table-bordered mt-4" style={{border:"none"}}>
  <tbody>
    <tr>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><button className="btn btn-danger">Delete</button> </td>
      
    </tr>
    <tr>
    <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><button className="btn btn-danger">Delete</button> </td>
    </tr>
    <tr>
    <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><button className="btn btn-danger">Delete</button> </td>
    </tr>
    <tr>
    <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><span className="text-dark">Name:</span> Lenanne Granhan </td>
      <td><button className="btn btn-danger">Delete</button> </td>
    </tr>
  </tbody>
</table>

    </form>


    


        </div>
      
    </>
  );
};

export default Question_2;
