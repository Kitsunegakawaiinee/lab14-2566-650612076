"use client";
import { Container, Text, Title, Rating, Group, Textarea, Button, Divider, Pagination } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      
      <Title mt="sm" size="h4">Your rating</Title>
      <Rating size="lg"></Rating>

      <Textarea placeholder="Do you enjoy eating?" label="Your review" mt="xs" minRows={3}></Textarea>

      <Button mt="xs" color="orange">Submit Review</Button>

      <Divider my="sm" size="xs"/>

      <Group position="center">
        <Title align="center" size="h4">Elon Musk</Title>
        <Rating readOnly value={5}/>
        </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" size="xs"/>

      <Group position="center">
        <Title align="center" size="h4">Mark Zuck</Title>
        <Rating readOnly value={4}/>
        </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} color="orange" mt="md" position="center"/>
      
      <Text align="center" color="dimmed" mt="sm">
        Copyright © 2023 Korawit  Piboon 650612076
      </Text>
    </Container>
  );
}
