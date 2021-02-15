export class DataService {
  pxCount = 100;
  records = [];

  constructor() {
    this.loadRecords();
  }

  getRecords = () => this.records;

  loadRecords = (count = 5) => {
    for (this.pxCount < this.pxCount + count; this.pxCount++; ) {
      this.records.push({
        id: this.pxCount,
        label: this.pxCount % 2 == 0 ? "cat" : "not cat",
        img: `http://placekitten.com/${this.pxCount}/${this.pxCount}`,
        edited: false
      });
    }
  };

  updateRecord = (idx, label) => {
    this.records[idx].label = label;
    this.records[idx].edited = true;
  };
}
