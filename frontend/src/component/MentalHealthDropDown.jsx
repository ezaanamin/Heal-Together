import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Depression', label: 'Depression' },
  { value: 'Anxiety', label: 'Anxiety disorders (e.g., generalized anxiety, social anxiety, panic)' },
  { value: 'Bipolar', label: 'Bipolar disorder' },
  { value: 'PTSD', label: 'Post-Traumatic Stress Disorder (PTSD)' },
  { value: 'OCD', label: 'Obsessive-Compulsive Disorder (OCD)' },
  { value: 'EatingDisorders', label: 'Eating disorders (e.g., anorexia, bulimia, binge-eating)' },
  { value: 'Schizophrenia', label: 'Schizophrenia' },
  { value: 'BPD', label: 'Borderline Personality Disorder (BPD)' },
  { value: 'ADHD', label: 'Attention-Deficit/Hyperactivity Disorder (ADHD)' },
  { value: 'SubstanceUse', label: 'Substance use disorders (alcohol, drugs, etc.)' },
  { value: 'SelfHarm', label: 'Self-harm or thoughts of suicide' },
  { value: 'BodyDysmorphic', label: 'Body dysmorphic disorder' },
  { value: 'Dissociative', label: 'Dissociative disorders' },
  { value: 'ASD', label: 'Autism Spectrum Disorder (ASD)' },
  { value: 'SleepDisorders', label: 'Sleep disorders (e.g., insomnia, sleep apnea)' },
  { value: 'Phobias', label: 'Phobias (specific phobias, agoraphobia)' },
  { value: 'Adjustment', label: 'Adjustment disorders' },
  { value: 'PersistentDepressive', label: 'Persistent Depressive Disorder (dysthymia)' },
  { value: 'SAD', label: 'Seasonal Affective Disorder (SAD)' },
  { value: 'ParentalMentalHealth', label: 'Parental mental health challenges (postpartum depression, parental burnout)' },
];

const MentalHealthDropdown = () => {
  const handleChange = (selectedOptions) => {
    console.log(selectedOptions);
  };

  return (
    <Select
      isMulti
      options={options}
      onChange={handleChange}
    />
  );
};

export default MentalHealthDropdown;
