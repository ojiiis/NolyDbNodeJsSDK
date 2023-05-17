<h1>ndbSDK - Axios SDK for NDB API.</h1>

<p>ndbSDK is a Node.js library that provides a convenient wrapper around the NDB API using Axios. It allows you to easily interact with the NDB API and perform common operations such as creating accounts, managing databases, creating tables, and executing table queries.</p>

<h1>Installation</h1>
<p>To use ndbSDK in your Node.js project, you can install it via npm:<p>
  <pre>
    <code>
    npm install ndb-sdk
    </code>    
  </pre>
  <h1>Usage</h1>
  <p>To get started with ndbSDK, require the library and create an instance of the `<b>ndbSDK</b>` class by providing your NDB API username and token:</p>
  <pre>
  <code>
  const ndbSDK = require('ndb-sdk');

const username = 'your-username';
const token = 'your-token';

const sdk = new ndbSDK(username, token);

  </code>
  </pre>


  <h1>Managing Databases
</h1>
  <p>
You can create a new database using the `<b>makeDB</b>` method:</p>
<pre><code>const database = 'new-database';

sdk.makeDB(database)
  .then(response => {
    console.log('Database created successfully:', response);
  })
  .catch(error => {
    console.error('Failed to create database:', error);
  });
</code></pre>

  <p>
To drop an existing database, use the `<b>dropDB</b>` method:</p>
<pre><code>const database = 'database-to-drop';

sdk.dropDB(database)
  .then(response => {
    console.log('Database dropped successfully:', response);
  })
  .catch(error => {
    console.error('Failed to drop database:', error);
  });
</code></pre>


  <h1>Managing Tables
</h1>
  <p>
To create a new table in a database, use the `<b>makeTABLE</b>` method:</p>
<pre><code>const db = 'database-name';
const table = 'new-table';
const scheme = [
  // Specify the table schema here
];

sdk.makeTABLE(db, table, scheme)
  .then(response => {
    console.log('Table created successfully:', response);
  })
  .catch(error => {
    console.error('Failed to create table:', error);
  });
</code></pre>



   <p>
To add data to a table, use the `<b>addToTABLE</b>` method:</p>
<pre><code>const db = 'database-name';
const table = 'table-name';
const data = [
  // Specify the data to add here
];

sdk.addToTABLE(db, table, data)
  .then(response => {
    console.log('Data added successfully:', response);
  })
  .catch(error => {
    console.error('Failed to add data:', error);
  });
</code></pre>


  <p>
To drop a table, use the `<b>dropTABLE</b>` method:</p>
<pre><code>const db = 'database-name';
const table = 'table-to-drop';

sdk.dropTABLE(db, table)
  .then(response => {
    console.log('Table dropped successfully:', response);
  })
  .catch(error => {
    console.error('Failed to drop table:', error);
  });
</code></pre>



  <h1>Querying Tables
</h1>
  <p>
To select data from a table, use the `<b>selectTABLE</b>` method:</p>
<pre><code>const db = 'database-name';
const table = 'table-name';
const option = {
  // Specify the query options here
};

sdk.selectTABLE(db, table, option)
  .then(response => {
    console.log('Selected data:', response
})
.catch(error => {
console.error('Failed to select data:', error);
});</code></pre>




  <p>
To delete data from a table, use the deleteFromTABLE method</p>
<pre><code>const db = 'database-name';
const table = 'table-name';
const option = {
  // Specify the delete options here
};

sdk.deleteFromTABLE(db, table, option)
  .then(response => {
    console.log('Data deleted successfully:', response);
  })
  .catch(error => {
    console.error('Failed to delete data:', error);
  });
</code></pre>

  <p>
To empty a table (delete all data), use the `<b>emptyTABLE</b>` method:</p>
<pre><code>const db = 'database-name';
const table = 'table-name';

sdk.emptyTABLE(db, table)
  .then(response => {
    console.log('Table emptied successfully:', response);
  })
  .catch(error => {
    console.error('Failed to empty table:', error);
  });
</code></pre>

<h1>Getting Table Schema</h1>
  <p>
To retrieve the schema of a table, use the `<b>tableSCHEME</b>` method:</p>
<pre><code>const db = 'database-name';
const table = 'table-name';

sdk.tableSCHEME(db, table)
  .then(response => {
    console.log('Table schema:', response);
  })
  .catch(error => {
    console.error('Failed to retrieve table schema:', error);
  });
}
</code></pre>


<h2>Contributing</h2>

<p>Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the <a href="https://github.com/ojiiis">GitHub repository</a>.</p>

<h2>License</h2>

<p>This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>

<hr>

<p>Feel free to customize the README according to your specific project details and add any additional sections that might be relevant.</p>
