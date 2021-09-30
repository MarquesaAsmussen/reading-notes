<!-- mongo shell process from Tuesday 09/28 -->

Last login: Tue Sep 28 20:34:30 on ttys003
➜ can-of-books-backend git:(getRequest) ✗ mongo
MongoDB shell version v5.0.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("2f7a425f-1e06-40bb-bb11-d1f029a4334b") }
MongoDB server version: 5.0.2
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
We recommend you begin using "mongosh".
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================

---

The server generated these startup warnings when booting:
2021-09-19T19:44:54.244-07:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted

---

---

        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()

---

> show dbs
> admin 0.000GB
> books 0.000GB
> can-books-database 0.000GB
> config 0.000GB
> local 0.000GB
> use books
> switched to db books
> show collections
> books
> db.books.find({}).pretty()
> {

    "_id" : ObjectId("612d919f62b042b6c1e715cf"),
    "title" : "The Lion, the Witch, and the Wardrobe",
    "description" : "Lucy accidentally discovers a magical world in the back of her wardrobe",
    "status" : true,
    "email" : "kevintheparrotlet@sqwakybird.com",
    "__v" : 0

}
{
"\_id" : ObjectId("612d919f62b042b6c1e715d0"),
"title" : "Hatchet",
"description" : "Kid gets lost in the woods because his plane crashed. Only has a hatchet",
"status" : false,
"email" : "hatchet@gmail.com",
"**v" : 0
}
{
"\_id" : ObjectId("612d919f62b042b6c1e715d1"),
"title" : "The Girl on the Train",
"description" : "Commuter catches daily glipses of a seemingly perfect couple...",
"status" : true,
"email" : "traingirl@gmail.com",
"**v" : 0
}

> show collections
> books
> use books
> switched to db books
> show collections
> books
> db.books.find
> function(query, fields, limit, skip, batchSize, options) {

    var cursor = new DBQuery(this._mongo,
                             this._db,
                             this,
                             this._fullName,
                             this._massageObject(query),
                             fields,
                             limit,
                             skip,
                             batchSize,
                             options || this.getQueryOptions());

    {
        const session = this.getDB().getSession();

        const readPreference = session._getSessionAwareClient().getReadPreference(session);
        if (readPreference !== null) {
            cursor.readPref(readPreference.mode, readPreference.tags);
        }

        const client = session._getSessionAwareClient();
        const readConcern = client.getReadConcern(session);
        if (readConcern !== null &&
            client.canUseReadConcern(session, cursor._convertToCommand(true))) {
            cursor.readConcern(readConcern.level);
        }
    }

    return cursor;

}

> db.books.find()
> { "\_id" : ObjectId("612d919f62b042b6c1e715cf"), "title" : "The Lion, the Witch, and the Wardrobe", "description" : "Lucy accidentally discovers a magical world in the back of her wardrobe", "status" : true, "email" : "kevintheparrotlet@sqwakybird.com", "**v" : 0 }
> { "\_id" : ObjectId("612d919f62b042b6c1e715d0"), "title" : "Hatchet", "description" : "Kid gets lost in the woods because his plane crashed. Only has a hatchet", "status" : false, "email" : "hatchet@gmail.com", "**v" : 0 }
> { "\_id" : ObjectId("612d919f62b042b6c1e715d1"), "title" : "The Girl on the Train", "description" : "Commuter catches daily glipses of a seemingly perfect couple...", "status" : true, "email" : "traingirl@gmail.com", "**v" : 0 }
> { "\_id" : ObjectId("6153e260d440953eb151b467"), "title" : "Being and Nothingness", "description" : "An Essay on Phenomenological Ontology", "status" : "read", "email" : "bookreader1@gmail.com", "**v" : 0 }
> { "\_id" : ObjectId("6153e260d440953eb151b468"), "title" : "Ham on Rye", "description" : "Auto-biography", "status" : "unread", "email" : "charles@gmail.com", "**v" : 0 }
> { "\_id" : ObjectId("6153e260d440953eb151b46a"), "title" : "Daring Greatly", "description" : "How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead", "status" : "unread", "email" : "nerdygirl@yahoo.com", "**v" : 0 }
> { "\_id" : ObjectId("6153e260d440953eb151b469"), "title" : "Blink", "description" : "It presents in popular science format research from psychology and behavioral economics on the adaptive unconscious: mental processes that work rapidly and automatically from relatively little information.", "status" : "read", "email" : "bookworm@gmail.com", "**v" : 0 }
> { "\_id" : ObjectId("6153e30c0ce45030ff228775"), "title" : "Ham on Rye", "description" : "Auto-biography", "status" : "unread", "email" : "charles@gmail.com", "**v" : 0 }
> { "\_id" : ObjectId("6153e30c0ce45030ff228774"), "title" : "Being and Nothingness", "description" : "An Essay on Phenomenological Ontology", "status" : "read", "email" : "bookreader1@gmail.com", "**v" : 0 }
> { "\_id" : ObjectId("6153e30c0ce45030ff228777"), "title" : "Daring Greatly", "description" : "How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead", "status" : "unread", "email" : "nerdygirl@yahoo.com", "**v" : 0 }
> { "\_id" : ObjectId("6153e30c0ce45030ff228776"), "title" : "Blink", "description" : "It presents in popular science format research from psychology and behavioral economics on the adaptive unconscious: mental processes that work rapidly and automatically from relatively little information.", "status" : "read", "email" : "bookworm@gmail.com", "\_\_v" : 0 }
