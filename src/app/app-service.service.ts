import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}
  //Getting data(formation) from the back
  getData() {
    return this.http.get('/api/formations');
  }
  //Posting the new Formation in the back
  postFormation(newFormation: {}) {
    console.log(newFormation);
    this.http.post('/api/formations', newFormation).subscribe((res) => {
      console.log(res);
    });
  }
  //Adding the objectives related to the new formation
  postObjectifs(newFormation) {
    console.log(newFormation);
    for (var i = 0; i < newFormation.Objectifs.length; i++) {
      let id = Math.floor(Math.random() * 100 + 1);
      let obj = {
        idObjectif: id,
        contenu: newFormation.Objectifs[i],
        idFormation: newFormation.idFormation,
      };

      this.http.post('/api/objectifs', obj).subscribe((res) => {
        console.log(res);
      });
    }
  }

  //Adding the participants related to the new formation
  postParticipants(newFormation) {
    console.log(newFormation);
    for (var i = 1; i < newFormation.NbreParticipants; i++) {
      let id = Math.floor(Math.random() * 100 + i);
      let p = {
        idParticipant: id,
        participant: newFormation.Participants[i][0],
        identifiant: newFormation.Participants[i][1],
        email: newFormation.Participants[i][2],
        idFormation: newFormation.idFormation,
      };
      console.log(p);
      this.http.post('/api/participants', p).subscribe((res) => {
        console.log(res);
      });
    }
  }
  //Getting the formateurs' data from the API
  getFormateurs() {
    return this.http.get('/api/formateurs');
  }

  getFormationById(id) {
    let data = this.http.get(`/api/formations/${id}`);
    console.warn('FORMATION FROM SERVICE ==', data);
    return data;
  }
  getObjectifsByFormation(id) {
    let data = this.http.get(`/api/objectifs/${id}`);
    console.warn('DATA FROM SERVICE ==', data);
    return data;
  }
  //Posting the new Formateur in the back
  postFormateur(newFormateur: {}) {
    console.log(newFormateur);
    this.http.post('/api/formateurs', newFormateur).subscribe((res) => {
      console.log(res);
    });
  }

  //Delete Formateur
  deleteFormateur(CIN: number) {
    console.log(CIN);
    this.http.delete(`/api/formateurs/${CIN}`).subscribe((res) => {
      console.log(res);
    });
  }

  //Update Formateur
  updateFormateur(newFormateur: {}, CIN) {
    console.log('NEWfORMATEUR000', newFormateur);
    this.http.put(`/api/formateurs/${CIN}`, newFormateur).subscribe((res) => {
      console.log(res);
    });
  }
  //Get Liste Participants by IdFormation
  getParticipantsByFormation(id) {
    let data = this.http.get(`/api/participants/${id}`);
    console.warn('DATA FROM SERVICE ==', data);
    return data;
  }

  getDataByTitle(title) {
    let data = this.http.get(`/api/formations/title/${title}`);
    console.warn('DATA FROM SERVICE ==', data);
    return data;
  }

  getEvalByFormation(id) {
    let data = this.http.get(`/api/evaluation/${id}`);
    // console.warn('DATA FROM SERVICE ==', data);
    return data;
  }
}
