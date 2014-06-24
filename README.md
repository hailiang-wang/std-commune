# Stonda Healthcare
## Description

## Engineering
### Instance Url 
[dev](https://stonda.ng.bluemix.net)
### MongoDB
To connect using the shell:

        mongo ds037907.mongolab.com:37907/std-commune-dev -u <dbuser> -p <dbpassword>

To connect using a driver via the standard URI (what's this?):

        mongodb://<dbuser>:<dbpassword>@ds037907.mongolab.com:37907/std-commune-dev

DB user : sam Password : SahiWeymEg
### Logger

        {
            "type": "file",
            "filename": "logs/default.log",
            "maxLogSize": 204800,
            "backups": 5
        },

In each source, get logger from the current file name as class name, and specify the method as the first parameter.

		var logger = require("../util/logger").getLogger("database");
		var method = "_newCollection";
		logger.debug(method, "name: " + name);