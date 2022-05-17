import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  Container,
  Positioned,
  Content,
  Header,
  CloseIcon,
  Scrollable,
  Background,
} from './styles';

interface Props {
  visible: boolean;
  title: string;
  onClose: () => void;
  children: JSX.Element | JSX.Element[]
}

const Modal = ({ visible, title, onClose, children }: Props) => {
  useEffect(() => {
    const [body] = document.getElementsByTagName('body');

    if (visible) {
      body.style.overflowY = 'hidden';
    }

    return () => {
      body.style.overflowY = 'auto';
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <Container>
          <Positioned>
            <Background
              onClick={() => onClose()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />
            <Content
              key="content"
              animate={{ y: 0 }}
              initial={{ y: '75%' }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween' }}
            >
              <Header>
                {title}
                <CloseIcon onClick={() => onClose()} />
              </Header>
              <Scrollable>{children}</Scrollable>
            </Content>
          </Positioned>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Modal;
