export class DataService {
  pxCount = 100;
  records = [];

  constructor() {
    this.loadRecords();
  }

  getRecords = () => this.records;

  loadRecords = (count = 5) => {
    const max = this.pxCount + count;
    for (this.pxCount; this.pxCount <= max; this.pxCount++) {
      this.records.push({
        id: this.pxCount,
        label: this.pxCount % 2 == 0 ? "cat" : "not cat",
        img: `http://placekitten.com/${this.pxCount}/${this.pxCount}`,
        edited: false
      });
    }
  };

  updateRecord = (id, label) => {
    const record = this.records.find(r => r.id === id);
    record.label = label;
    record.edited = true;
  };
}
