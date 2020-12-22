import React, { Fragment, useState } from 'react';
import './index.output.css';
import { Image, Box, Text, Button, Anchor, DropdownToggle, Modal } from './component-lib'

function App() {
  const [isModalToggled, setIsModalToggled] = useState(false)

  const handleSetIsModalToggled = () => {
    console.log('clicked')
    console.log("TCL ~ file: App.tsx ~ line 16 ~ handleSetIsModalToggled ~ isModalToggled", isModalToggled)
    setIsModalToggled(!isModalToggled)
  }

  const learnMoreBtn = (
    <Anchor
      href="#"
      rwStyle={{
        // textColor: ['text-blue-400', 'hover:text-blue-600'],
        textDecoration: 'underline'
      }}
    >Learn More</Anchor>
  )

  return (
    <Fragment>
      <div id="modal-root" />

      <Box className="App" rwStyle={{ padding: 'p-16' }}>

        <button 
          onClick={handleSetIsModalToggled}
          style={{ display: 'block', marginBottom: '2rem' }}
        >Toggle Modal</button>

        {isModalToggled && (
          <Modal 
            toggle={handleSetIsModalToggled}
            modalContent={(
              <Text rwStyle={{ padding: ['p-6', 'pt-16'] }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac cursus tellus. Integer diam nisi, aliquam a est eget, lobortis porta ex.</Text>
            )}
          />
        )}

        <DropdownToggle
          // useDefaultStyles={false}
          toggle={(isActive: boolean) => <Box>{`Click${isActive ? 'ed' : ''} it`}</Box>}
          dropdownContent={<Box rwStyle={{ width: 'w-64' }}>You clicked it! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum nemo quasi rerum voluptate, assumenda iusto delectus sequi perferendis quia tenetur! Optio, harum placeat expedita eum veniam ex eaque aperiam.</Box>}
          dropdownAlignment={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        />

        <Box rwStyle={{margin: 'mb-10'}} />
        
        <Box
          rwStyle={{
            bgColor: 'bg-white',
            borderRadius: 'rounded-lg',
            shadow: 'shadow-xl',
            width: 'w-64',
            overflow: 'overflow-hidden',
          }}
        >
          <Image
            alt='Itza cat'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1024px-Kittyply_edit1.jpg"
            rwStyle={{
              opacity: ['opacity-100', 'hover:opacity-75'],
              transition: {
                duration: 'duration-300',
                property: 'transition-opacity',
                timing: 'ease-in-out'
              }
            }}
          />
          <Box rwStyle={{ padding: 'p-3' }}>
            <Text
              rwStyle={{
                fontSize: 'text-2xl',
                fontWeight: 'font-bold',
                margin: 'mb-2',
                // textColor: ['text-blue-500', 'lg:text-blue-200'],
                padding: 'pb-3.5'
              }}
            >
              Hey it's a box
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac cursus tellus. Integer diam nisi, aliquam a est eget, lobortis porta ex. {learnMoreBtn}
            </Text>
            <Button
              onClick={() => console.log('clicked')}
              // rwStyle={{
              //   // bgColor: ['bg-blue-800', 'hover:bg-blue-600'],
              //   // textColor: 'text-white',
              //   borderRadius: 'rounded',
              //   padding: ['px-4', 'py-2'],
              //   margin: ['mt-4'],
              //   width: 'w-full',
              //   transition: {
              //     duration: 'duration-200',
              //     property: 'transition-colors',
              //     timing: 'ease-in-out'
              //   }
              // }}
            >
              Click the button
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default App;
