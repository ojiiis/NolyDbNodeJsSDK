const axios = require('axios');
class ndbSDK {
    constructor(username, token) {
        this.baseURL = "https://nigeriansonly.com/db/api";
        this.token = token;
        this.username = username;
    }

    // Helper method for sending HTTP requests
    sendRequest(url, method = 'GET', params = {}, headers = {}) {
        const config = {
            method,
            url,
            headers: {
                ...headers,
                'Token': this.token
            }
        };

        if (method === 'POST') {
            config.data = new URLSearchParams(params);
        } else {
            config.params = params;
        }

        return axios(config)
            .then(response => response.data)
            .catch(error => {
                throw new Error(error.message);
            });
    }


    makeDB(database) {
        const url = `${this.baseURL}/${this.username}/make_database`;
        const params = {
            database
        };

        return this.sendRequest(url, 'POST', params);
    }

    dropDB(database) {
        const url = `${this.baseURL}/${this.username}/drop_database`;
        const params = {
            database
        };

        return this.sendRequest(url, 'POST', params);
    }

    makeTABLE(db, table, JSscheme = {}) {
		const scheme = JSON.stringify(JSscheme);
        const url = `${this.baseURL}/${this.username}/${db}/make_table`;
        const params = {
            table,
            scheme
        };

        return this.sendRequest(url, 'POST', params);
    }

    addToTABLE(db, table, JSdata = {}) {
		const  data = JSON.stringify(JSdata);
        const url = `${this.baseURL}/${this.username}/${db}/add`;
        const params = {
            table,
           data
        };

        return this.sendRequest(url, 'POST', params);
    }

    dropTABLE(db, table) {
        const url = `${this.baseURL}/${this.username}/${db}/drop`;
        const params = {
            table
        };

        return this.sendRequest(url, 'POST', params);
    }

    selectTABLE(db, table, JSoption = {}) {
		const option =  JSON.stringify(JSoption);
        const url = `${this.baseURL}/${this.username}/${db}/select`;
        const params = {
            table,
           option
        };

        return this.sendRequest(url, 'POST', params);
    }

    updateTABLE(db, table,JSset = {}, JSoption = {}) {
		const  option =  JSON.stringify(JSoption);
		const set =  JSON.stringify(JSset);
        const url = `${this.baseURL}/${this.username}/${db}/update`;
        const params = {
            table,
            option,
			set
        };

        return this.sendRequest(url, 'POST', params);
    }

    deleteFromTABLE(db, table, JSoption = {}) {
        const  option =  JSON.stringify(JSoption);
        const url = `${this.baseURL}/${this.username}/${db}/delete`;
        const params = {
            table,
            option
        };

        return this.sendRequest(url, 'POST', params);
    }

    emptyTABLE(db, table) {
        const url = `${this.baseURL}/${this.username}/${db}/empty`;
        const params = {
            table
        };

        return this.sendRequest(url, 'POST', params);
    }

    tableSCHEME(db, table) {
        const url = `${this.baseURL}/${this.username}/${db}/scheme`;
        const params = {
            table
        };

        return this.sendRequest(url, 'POST', params);
    }
}

module.exports = ndbSDK;
