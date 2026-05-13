const { default: mongoose } = require("mongoose");
const dns = require("dns");

function sanitizeMongoUri(uri) {
  try {
    const parsed = new URL(uri);
    const host = parsed.host;
    const dbName =
      parsed.pathname && parsed.pathname !== "/" ? parsed.pathname : "/";
    return `${parsed.protocol}//${host}${dbName}`;
  } catch {
    return "<invalid Mongo URI>";
  }
}

function configureMongoDns() {
  // Node uses its own DNS resolver (c-ares). On some networks, SRV lookups for
  // mongodb+srv can fail even though Windows resolver works (nslookup succeeds).
  // Setting DNS servers here forces reliable SRV resolution.
  const envServers = process.env.MONGODB_DNS_SERVERS;
  const servers = envServers
    ? envServers
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : ["1.1.1.1", "8.8.8.8"]; // Cloudflare + Google

  try {
    dns.setServers(servers);
  } catch {
    // Ignore: if this fails, mongoose will still attempt to connect.
  }
}

async function ConnectedToDB() {
  const mongoUri = (process.env.MONGODB || "").trim();
  if (!mongoUri) {
    throw new Error("Missing MONGODB environment variable");
  }

  configureMongoDns();

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Connected to database ✅");
  } catch (error) {
    const safeTarget = sanitizeMongoUri(mongoUri);
    console.error(`Mongo connection failed (${safeTarget})`);
    console.error(error);

    // Friendly hints for common Atlas SRV failures
    if (error?.syscall === "querySrv" || error?.code === "ENOTFOUND") {
      console.error(
        "Hint: This looks like a DNS/SRV lookup issue for mongodb+srv. " +
          "Try setting MONGODB_DNS_SERVERS=1.1.1.1,8.8.8.8 or switch to Atlas 'Standard connection string'.",
      );
    }

    throw error;
  }
}

module.exports = ConnectedToDB;

// // const { default: mongoose } = require("mongoose");

// // async function ConnectTODB() {
// //   await mongoose
// //     .connect(process.env.MONGODB)
// //     .then(() => {
// //       console.log("Connected to Database ✅");
// //     })
// //     .catch((err) => {
// //       console.log("database error : ", err);
// //     });
// // }

// // module.exports = ConnectTODB;

// function ConnectToDB() {
//   const dns = require("dns");

//   function sanitizeMongoUri(uri) {
//     try {
//       const parsed = new URL(uri);
//       const host = parsed.host;
//       const dbName =
//         parsed.pathname && parsed.pathname !== "/" ? parsed.pathname : "/";
//       return `${parsed.protocol}//${host}${dbName}`;
//     } catch {
//       return "<invalid Mongo URI>";
//     }
//   }

//   function configureMongoDns() {
//     const envServers = process.env.MONGODB_DNS_SERVERS;
//     const servers = envServers
//       ? envServers
//           .split(",")
//           .map((s) => s.trim())
//           .filter(Boolean)
//       : ["1.1.1.1", "8.8.8.8"];
//     try {
//       dns.setServers(servers);
//     } catch {
//       // Ignore: if this fails, mongoose will still attempt to connect.
//     }
//   }

//   async function ConnectToDB() {
//     const mongoUri = (process.env.MONGODB || "").trim();
//     if (!mongoUri) {
//       throw new Error("Missing MONGODB environment variable");
//     }
//     configureMongoDns();
//     try {
//       await mongoose.connect(mongoUri, {
//         serverSelectionTimeoutMS: 10000,
//       });
//       console.log("Connected to database ✅");
//     } catch (error) {
//       const safeTarget = sanitizeMongoUri(mongoUri);
//       console.error(`Mongo connection failed (${safeTarget})`);
//       console.error(error);
//       if (error?.syscall === "querySrv" || error?.code === "ENOTFOUND") {
//         console.error(
//           "Hint: This looks like a DNS/SRV lookup issue for mongodb+srv. " +
//             "Try setting MONGODB_DNS_SERVERS=1.1.1.1,8.8.8.8 or switch to Atlas 'Standard connection string'.",
//         );
//       }
//       throw error;
//     }
//   }
// }

// module.exports = ConnectToDB;
