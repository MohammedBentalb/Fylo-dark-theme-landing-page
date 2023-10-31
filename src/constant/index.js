import pc from '../assets/images/icon-access-anywhere.svg';
import shield from '../assets/images/icon-security.svg';
import collaboration from '../assets/images/icon-collaboration.svg';
import file from '../assets/images/icon-any-file.svg';
import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';
import phone from '../assets/images/icon-phone.svg'
import email from '../assets/images/icon-email.svg'

const links = ['Features', 'Team', 'Sign In'];
const features = [
  {
    img: pc,
    title: 'Access your files, anywhere',
    desc: 'The ability to use a smartphone, tablet. or computer to access your account means your files follow you everywhere.',
  },
  {
    img: shield,
    title: 'Security you can trust',
    desc: '2-factor authentication and user-controlled encryption are just a couple ot the security features we allow to help secure your files.',
  },
  {
    img: collaboration,
    title: 'Real time collaboration',
    desc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    img: file,
    title: 'Store any type pf file',
    desc: "Whether you're sharing holidays photos or work documents. FYIo has you covered allowing for all file types to securely stored and shared.",
  },
];

const testimonials = [
  {
    img: profile1,
    name: 'Statish Patel',
    job: 'Founder & ceo, Huddle',
    message:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
  {
    img: profile2,
    name: 'Bruce McKenzie',
    job: 'Founder & ceo, Huddle',
    message:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
  {
    img: profile3,
    name: 'Iva Boyd',
    job: 'Founder & ceo, Huddle',
    message:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
];

const footerLink1 = ['About Us', 'Jobs', 'Press us', 'Blog']
const footerLink2 = ['Contact Us', 'Terms', 'Policy']
const footerInfo = [ {img: phone, text: '+1-543-123-4567'}, {img: email, text: 'example@fylo.com'}]

export { links, features, testimonials, footerLink1, footerLink2, footerInfo };
