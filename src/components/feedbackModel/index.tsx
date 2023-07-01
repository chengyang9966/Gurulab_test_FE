import React, { useState, Fragment } from 'react';
import { Button, Modal, List, Typography } from 'antd';
import { FeedBackLisitng, FeedBackLisitngData } from '../../assets/feedbackLisitng/feedbacklisitng';
import { FEEDBACK_LISTING } from '../../constant/feedback.enum';
const { Title } = Typography;

type feedBackFromProps = {
  submitForm: (feedbackId: string) => Promise<void>;
  openFeedBackForm: boolean;
  handleCancelFeedBackForm: () => void;
};
interface FeedBackDataLisitng {
  id: string;
  labelName: string;
  emoji: string;
  desc: string;
  onclick: (id: string) => void;
  isSelected: boolean;
  feedbackLisiting: FeedBackLisitngData[];
}

const FeedBackModel: React.FC<feedBackFromProps> = ({
  submitForm,
  openFeedBackForm,
  handleCancelFeedBackForm
}) => {
  const handleClick = (id: string) => {
    setFeedBackButton((prev) => {
      prev = prev.map((x) => {
        if (x.id === id) {
          return { ...x, isSelected: true };
        }
        return { ...x, isSelected: false };
      });
      return prev;
    });
  };

  const [FeedBackButton, setFeedBackButton] = useState<FeedBackDataLisitng[]>([
    {
      id: '1',
      labelName: 'Smiling Face',
      emoji: String.fromCodePoint(0x1f603),
      desc: 'Okay.',
      onclick: handleClick,
      isSelected: false,
      feedbackLisiting: FeedBackLisitng.filter((x) => x.type === FEEDBACK_LISTING.OKAY_LIST)
    },
    {
      id: '2',
      labelName: 'Star-Struck',
      emoji: String.fromCodePoint(0x1f929),
      desc: 'Awesome!',
      onclick: handleClick,
      isSelected: false,
      feedbackLisiting: FeedBackLisitng.filter((x) => x.type === FEEDBACK_LISTING.AWSEOME_LIST)
    }
  ]);

  return (
    <Fragment>
      <Modal
        style={{ textAlign: 'center' }}
        open={openFeedBackForm}
        title={<Title level={3}>How was your class today?</Title>}
        onCancel={handleCancelFeedBackForm}
        footer={[]}>
        <p>Your honest answer will help to imporve your class in the future</p>
        {FeedBackButton.map((w) => {
          return (
            <Fragment key={w.id}>
              <Button
                type={w.isSelected ? 'primary' : 'text'}
                style={{ height: '110px', marginRight: '5px' }}
                onClick={() => w.onclick(w.id)}>
                <span role="img" style={{ fontSize: '40px' }} aria-label={w.labelName}>
                  {w.emoji}
                </span>
                <p>{w.desc}</p>
              </Button>
            </Fragment>
          );
        })}
        {FeedBackButton.filter((x) => x.isSelected).map((w) => {
          return (
            <div key={w.id} style={{ marginTop: '15px' }}>
              <Title level={3}>Can you tell us why?</Title>
              {w.isSelected ? (
                <List
                  bordered
                  dataSource={w.feedbackLisiting}
                  renderItem={(item) => (
                    <List.Item>
                      <Button
                        type="text"
                        style={{ width: '100%', textAlign: 'left' }}
                        onClick={() => submitForm(w.id)}>
                        {item.title}
                      </Button>
                    </List.Item>
                  )}
                />
              ) : null}
            </div>
          );
        })}
      </Modal>
    </Fragment>
  );
};

export default FeedBackModel;
