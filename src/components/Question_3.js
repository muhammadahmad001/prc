import React, { useEffect, useState } from "react";
import axios from "axios";
const Question_3 = () => {
  const [users, setUsers] = useState([]);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    zipcode: ""
    // Other user data fields
  });

  const fetchUsersData = async () => {
    setIsUserLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsUserLoading(false);
    }
  };

  const UserItem = (props) => {
    return (
      <div>
        <h3>{props.user.name}</h3>
        <p>Email: {props.user.email}</p>
        {/* Display other user details */}
      </div>
    );
  };

  const addUser = () => {
    // Create a copy of the users array and add the new user to it
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Clear the input fields after adding the user
    setNewUser({
      name: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    zipcode: ""
      // Other user data fields
    });
  };

  const deleteUser = (email) => {
    // Filter out the user with the specified email
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div>

      
      {/* Display users */}
      {isUserLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <UserItem user={user} />
              <button onClick={() => deleteUser(user.email)}>Delete</button>
            </div>
          ))}
        </div>
      )}

      {/* Add user form */}
      <div>
        <h3>Add User</h3>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <br></br>
        <input
          type="text"
          placeholder="phone"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
        />
        
        <input
          type="text"
          placeholder="city"
          value={newUser.city}
          onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
        />
        <br></br>
        <input
          type="text"
          placeholder="street"
          value={newUser.street}
          onChange={(e) => setNewUser({ ...newUser, street: e.target.value })}
        />
        
        <input
          type="text"
          placeholder="zipcode"
          value={newUser.zipcode}
          onChange={(e) => setNewUser({ ...newUser, zipcode: e.target.value })}
        />
        {/* Other input fields for user data */}
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
};

export default Question_3;
