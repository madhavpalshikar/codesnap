var app = new Vue({
    el: '#app',
    data: {
      name: 'Madhav',
      users:[],
      search: ''
    },
    created: function(){
            axios.get('https://reqres.in/api/users?page=2')
               .then(res => {
                   this.users = res.data.data;
                   console.log('users', this.users);
               })
               .catch(err => console.log)
               .finally(()=>{
                   console.log(' Request completed.');
                   this.postXHR();
                   this.getXHR();
               })
    },
    computed:{
        searchUsers: function(){
            console.log('searchUser');
            if(this.search.length > 0){
                return this.users.filter((u)=>{
                    if(u.first_name.includes(this.search)){
                        return u;
                    }
                })
            }
            else{
                return this.users;
            }
        }
    },
    methods:{
        getData: function(){
            axios.get('https://reqres.in/api/users?page=2')
               .then(res => console.log)
               .catch(err => console.log)
               .finally(()=>{
                   console.log(' Request completed.');
               })

        },
        getXHR: function(){
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = ()=>{
                console.log('readyState', xhr.readyState, xhr.responseText);
            };
            xhr.open('GET','https://reqres.in/api/users?page=2');
            xhr.send();
        },
        postXHR: function(){
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState==4){
                    console.log(xhr.responseText);
                }
            }
           
            xhr.open('POST','https://reqres.in/api/login');
            xhr.setRequestHeader('Content-Type', "application/json");
            xhr.send(JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }));
        },
       
    }
})

