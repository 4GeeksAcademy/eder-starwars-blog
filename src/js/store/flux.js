const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      planets: [],
      vehicles: [],
      liked: [],
    },
    actions: {
      loadSomeData: async (target, store) => {
        const URL = "https://www.swapi.tech/api/" + target + "?page=1&limit=40";
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setStore({ [store]: data.results });
          return;
        } catch (error) {
          console.log(error);
          return;
        }
      },

      saveLikedCards: (id, type, str) => {
        const store = getStore();
        if (!(id in store.liked)) {
          console.log("inside");
          const newVal = [
            ...store.liked,
            { id: id, name: str, type: type, key: id + type },
          ];
          setStore({
            liked: newVal,
          });
          console.log(store.liked);
        }
      },

      deleteLikedCards: (keyValue) => {
        const store = getStore();
        const storeLiked = store.liked;
        const updatedLiked = storeLiked.filter(
          (element) => element.key !== keyValue
        );
        setStore({ liked: updatedLiked });
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
