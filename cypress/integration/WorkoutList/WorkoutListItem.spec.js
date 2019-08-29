/* eslint-disable prettier/prettier */

/* eslint-disable no-undef */

describe('Display workout list', () => {
  
    it('should correctly show a list of workouts', () => {
      cy.request('http://localhost:3001/Workouts')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(3)
      })
    })
  })