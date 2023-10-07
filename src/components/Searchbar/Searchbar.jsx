import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  SearchbarHeader,
  Form,
  Field,
  SearchFormButton,
  SearchFormButtonLabel,
  ErrorMessage,
} from 'components/Searchbar/Searchbar.styled';

const SearchSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Enter a Search Query'),
});

const initialValues = {
  name: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, action) => {
    if (values.name.trim() === '') {
      toast.warn('Enter a Search Query!');
      action.resetForm();
      return;
    }

    onSubmit(values.name.toLowerCase().trim());

    action.resetForm();
  };
  return (
    <SearchbarHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={SearchSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <BsSearch size={20} />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <Field
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Search images and photos"
          />

          <ErrorMessage name="name" component="div" />
        </Form>
      </Formik>
    </SearchbarHeader>
  );
};
