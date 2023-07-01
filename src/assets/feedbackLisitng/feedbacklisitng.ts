export interface FeedBackLisitngData {
  title: string;
  id: string;
  type: string;
}

export const FeedBackLisitng: FeedBackLisitngData[] = [
  {
    title: 'I felt bored a few times.',
    id: '1',
    type: 'OKAY_LIST'
  },
  {
    title: 'I can only understand some parts.',
    id: '2',
    type: 'OKAY_LIST'
  },
  {
    title: 'I can only do some of the activites.',
    id: '3',
    type: 'OKAY_LIST'
  },
  {
    title: 'I wish to interact more with my tutor.',
    id: '4',
    type: 'OKAY_LIST'
  },
  {
    title: 'I wish to interact more with my classmates.',
    id: '5',
    type: 'OKAY_LIST'
  },

  {
    title: 'I did not feel bored at all.',
    id: '11',
    type: 'AWSEOME_LIST'
  },
  {
    title: 'I understand almost everything.',
    id: '12',
    type: 'AWSEOME_LIST'
  },
  {
    title: 'I can do all the activities.',
    id: '13',
    type: 'AWSEOME_LIST'
  },
  {
    title: 'I enjoyed interacting with my tutor.',
    id: '14',
    type: 'AWSEOME_LIST'
  },
  {
    title: 'I enjoyed interacting with my classmates.',
    id: '15',
    type: 'AWSEOME_LIST'
  }
];
