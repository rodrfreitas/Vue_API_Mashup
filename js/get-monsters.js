// Vue App
const dndTopTenMonsters = Vue.createApp({
    created() {
        // Fetch initial data here
        this.fetchMonsters();
    },
    data() {
        return {
            isLoading: true,
            showModal: false,
            monsterData: [],
            monsterName: "",
            monsterCr: "",
            monsterFullImg: "",
            hp: "",
            challengeRating: "",
            str: "",
            dex: "",
            con: "",
            int: "",
            wis: "",
            cha: "",
            size: "",
            error: null
        };
    },
    methods: {
        fetchMonsters() {
            fetch('http://localhost/Freitas_Witt_Rodrigo_Tiago_Vue_API_Mashup/dndtopten-api/public/monsters')
            .then(res => res.json())
            .then(data => {
                this.monsterData = data;
                this.isLoading = false;
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
        },
        openModal(monsterProxy) {
            this.isLoading = true;
            this.resetParameters();
            const monster = Vue.toRaw(monsterProxy);
            const monsterName = monster.name;
            const monsterDesc = monster.monster_desc;
            const monsterFullImg = monster.full_img;
            // console.log("Monster object:", monster); // Debug
            // console.log("Monster name:", monsterName); // Debug
            this.showModal = true;
            const machineName = monster.name.toLowerCase().split(' ').join('-');
            fetch(`https://www.dnd5eapi.co/api/monsters/${machineName}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Monster info:", data); // Debug
                // Update modal
                this.isLoading = false;
                this.monsterName = monsterName;
                this.monsterCr = monsterDesc;
                this.monsterFullImg = monsterFullImg;
                this.hp = data.hit_points;
                this.challengeRating = data.challenge_rating;
                this.str = data.strength;
                this.dex = data.dexterity;
                this.con = data.constitution;
                this.int = data.intelligence;
                this.wis = data.wisdom;
                this.cha = data.charisma;
                this.size = data.size;
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
        },
        resetParameters() {
            //clear last info display
            this.monsterName = "";
            this.monsterCr = "";
            this.monsterFullImg = "";
            this.hp = "";
            this.challengeRating = "";
            this.str = "";
            this.dex = "";
            this.con = "";
            this.int = "";
            this.wis = "";
            this.char = "";
            this.size = "";
        },
        closeModal() {
            this.showModal = false;
        }
    }
});

dndTopTenMonsters.mount('#app');
