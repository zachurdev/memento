```bash
cd ~/src/zachurdev/
npx create-react-app memento --template cra-template-pwa
cd ~/src/zachurdev/memento/
npm start
# git init -b main
# git add .
# git commit -m "init"
gh repo create --public memento
git remote add origin https://github.com/zachurdev/memento
git remote -v
git push origin main
```
###### src/App.js (Delete boilerplate code)
```js
function App() {
  return (
    <div>

    </div>
  );
}

export default App;
```
```bash
mkdir ~/src/zachurdev/memento/src/components/
mkdir ~/src/zachurdev/memento/src/hooks/
mkdir ~/src/zachurdev/memento/src/utilities/
mkdir ~/src/zachurdev/memento/public/assets/
```
###### https://console.firebase.google.com/
1. Create a Firebase account
2. Create a project
3. Name the project ("zachurdev-memento")
4. Enable Google Analytics for this project (Y/N)
5. Configure Google Analytics (Choose or create a Google Analytics account)
6. Analytics location (if applicable)
7. Use the default settings for sharing Google Analytics data
8. Accept the Google Analytics terms
```bash
npm i -g firebase-tools
firebase login
# Allow Firebase ( . . . ) ? Yes
cd ~/src/zachurdev/memento/
firebase init hosting
# Please select an option: Use an existing project
# Select a default Firebase project for this directory: zachurdev-memento
# What do you want to use as your public directory? build
# Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N
# Set up automatic builds and deploys with GitHub? (y/N) N
npm run build
firebase deploy
```
###### src/App.js -> src/App.jsx
```jsx
function App() {
    const [cards, setCards] = useState(shuffle); // src/utilities/shuffle.js
    return (
    <>
        <div classname="grid">

        </div>
    </>
    );
}

export default App;
```
###### src/utilities/shuffle.js
```js
const shuffle = () => {
    const asssets = [
        { image: '/assets/css.png' },
        { image: '/assets/html5.png' },
        { image: '/assets/jquery.png' },
        { image: '/assets/js.png' },
        { image: '/assets/next.png' },
        { image: '/assets/node.png' },
        { image: '/assets/react.png' },
        { image: '/assets/ts.png' },
    ];
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
```
```bash
cd ~/src/tmp/
git clone https://github.com/fireship-io/react-course
rm ~/src/zachurdev/memento/src/index.css
cp ~/src/tmp/react-course/src/index.css ~/src/zachurdev/memento/src/index.css
rm -r ~/src/zachurdev/memento/public/assets/
cp ~/src/tmp/react-course/public/assets ~/src/zachurdev/memento/public/assets
```
###### src/App.jsx
```jsx
function App() {
  
  const [cards, setCards] = useState(shuffle); // src/utilities/shuffle.js
  
  return (
  <>

    <div classname="grid">
      {cards.map((card) => {
        const { image, id, matched } = card;

        return (
          <Card
            key={id}
            image={image}
            select={false}
            onClick={() => {}}
          />
        );
      })}
    </div>
  </>
  );
}

export default App;
```
```bash
mkdir ~/src/components/Card.jsx
```
###### src/components/Card.jsx
```jsx
const Card = ({ image, selected, onClick }) => {

    return (
        <div className="card">
            <div className={select && 'selected'}>
                <img alt="" src={image} className="card-face" />

                <img
                    alt=""
                    className="card-back"
                    src={'/assets/fireship.png'}
                />
            </div>
        </div>
    );
};

export default Card;
```