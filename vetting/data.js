export class DataService {
  pxCount = 100;
  records = [];
  sortField = "id";

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
    this.sortRecords(this.sortField);
  };

  sortRecords = field => {
    this.sortField = field;
    this.records.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
  };

  updateRecord = (id, label, edited) => {
    const record = this.records.find(r => r.id === id);
    record.label = label;
    record.edited = edited;
    this.sortRecords(this.sortField);
  };
}
