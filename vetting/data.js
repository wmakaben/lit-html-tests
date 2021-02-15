export class DataService {
  pxCount = 100;
  records = [];

  constructor() {}

  getRecords = () => records;

  loadRecords = count => {
    for(pxCount < pxCount + count; pxCount++) {
      records.push({
        id: pxCount,
        label: pxCount % 2 == 0 ? 'cat' : 'not cat',
        img: `http://placekitten.com/${pxCount}/${pxCount}`,
        edited: false
      });
    }
  };

  updateRecord = (idx, label) => {
    records[idx].label = label;
    records[idx].edited = true;
  }
}
