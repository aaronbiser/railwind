import React from 'react';
import { Box, Header, Text, Video, DivProps } from '../component-lib'

const SharedBox = ({ children, rwStyle }: DivProps) => <Box rwStyle={{ margin: 'mb-10', ...rwStyle }}>{children}</Box>
const SharedHeader = ({ text }: { text: string }) => <Header as="h4" rwStyle={{ margin: 'mb-3' }}>{text}</Header>

const Card = () => {
  return (
    <Box>
      <SharedBox>
        <SharedHeader text="List Items" />
        <Box as="ul" rwStyle={{ margin: 'mb-6', padding: 'pl-4' }}>
          <Box as="li" rwStyle={{ listStyleType: 'list-disc' }}>thing 1</Box>
          <Box as="li" rwStyle={{ listStyleType: 'list-disc' }}>thing 2</Box>
        </Box>
      </SharedBox>

      <Box dangerouslySetInnerHTML={{ __html: '<p>Thing</p>' }} />

      <SharedBox rwStyle={{ width: 'w-64' }}>
        <SharedHeader text="Group Class" />
        <Text>Hover inside box to see the text color change</Text>
        <Box
          isGroupParent
          rwStyle={{
            borderColor: 'border-gray-300',
            borderStyle: 'border-solid',
            borderWidth: 'border',
            margin: 'mt-4',
            padding: 'p-4'
          }}
        >
          <Box rwStyle={{ textColor: ['text-color1-400', 'group-hover:text-color1-700'] }}>Box</Box>
          <Box rwStyle={{ textColor: ['text-color2-400', 'group-hover:text-color2-700'] }}>Box</Box>
        </Box>
      </SharedBox>

      <SharedBox>
        <SharedHeader text="Video Example" />
        <Video
          muted
          controls
          media={[
            {
              url: "https://www.w3schools.com/html/mov_bbb.mp4",
              mimeType: "video/mp4"
            },
            {
              url: "https://www.w3schools.com/html/mov_bbb.ogg",
              mimeType: "video/ogg"
            }
          ]}
          rwStyle={{
            width: 'w-1/3',
            borderColor: 'border-gray-300',
            borderStyle: 'border-solid',
            borderWidth: 'border',
          }}
        >
          <p>Testing</p>
        </Video>
      </SharedBox>
    </Box>
  );
};

export default Card;