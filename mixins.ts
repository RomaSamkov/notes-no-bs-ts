function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction();
logger("string !");

function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = "";
    logg(str: string) {
      console.log(str);
      this.completeLog += str + "\n";
    }
    dumpLog() {
      return this.completeLog;
    }
  };
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.logg("TS");
console.log(logger2.dumpLog());

function SimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};
    set(id: string, value: T): void {
      this.db[id] = value;
    }
    get(id: string): T {
      return this.db[id];
    }
    getObject(): Record<string, T> {
      return this.db;
    }
  };
}

const StringDatabase = SimpleMemoryDatabase<string>();
const sbd1 = new StringDatabase();
sbd1.set("1", "TypeScript");

type Constructor<T> = new (...args: any[]) => T;

function Dumpuble<T extends Constructor<{ getObject(): object }>>(Base: T) {
  return class Dumpuble extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpubleStringDatabase = Dumpuble(StringDatabase);
const sbd2 = new DumpubleStringDatabase();
sbd2.set("2", "JavaScript");
sbd2.dump();
