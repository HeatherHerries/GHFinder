class Github {
  constructor() {
    this.client_id = "49d0ebfb3a8a5fd3acf2";
    this.client_secret = "2db86955841f65a24957a324658376f275267ab3";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
