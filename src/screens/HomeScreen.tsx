import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FeatureCard } from "../components/FeatureCard";
import type { ThemeColors } from "../theme/colors";

const clientFeatures = [
  {
    title: "Smart Authentication",
    description: "Email and phone login, biometric ready, and secure session management."
  },
  {
    title: "Service Marketplace",
    description:
      "Website, App Development, Digital Marketing, SEO, Video Editing, Graphic Design."
  },
  {
    title: "Custom Project Requests",
    description: "Guided intake form with project scope, budget, and timeline selection."
  },
  {
    title: "Real-time Project Tracking",
    description: "Timeline view, milestones, and delivery confidence indicators."
  },
  {
    title: "Secure Chat & Support",
    description: "Encrypted conversations with support and the assigned delivery team."
  },
  {
    title: "Payments & Invoices",
    description: "Integrated checkout, subscription billing, and invoice downloads."
  },
  {
    title: "Appointment Booking",
    description: "Schedule consultations, kickoff calls, and review sessions."
  }
];

const adminFeatures = [
  {
    title: "Client Management Suite",
    description: "Unified CRM with onboarding, segmentation, and SLA tracking."
  },
  {
    title: "Project Assignment",
    description: "Allocate teams, balance workloads, and automate handoffs."
  },
  {
    title: "Revenue Analytics",
    description: "Recurring revenue, pipeline value, churn, and conversion metrics."
  },
  {
    title: "Task Progress Monitoring",
    description: "Kanban overview with risk flags, blockers, and QA checkpoints."
  },
  {
    title: "Notification Control",
    description: "Broadcasts, lifecycle notifications, and emergency announcements."
  },
  {
    title: "Subscription & Pricing",
    description: "Plan builder, promotions, add-ons, and geo-based pricing."
  }
];

const teamFeatures = [
  {
    title: "Assigned Projects",
    description: "Role-based queues with priorities, scope, and due dates."
  },
  {
    title: "File Management",
    description: "Secure uploads, versioning, and delivery handoff packages."
  },
  {
    title: "Task Updates",
    description: "Daily check-ins, blockers, and automated status changes."
  },
  {
    title: "Time Tracking",
    description: "In-app timers for billable work and resource utilization."
  },
  {
    title: "Team Communication",
    description: "Internal channels, standup notes, and escalation paths."
  }
];

interface HomeScreenProps {
  colors: ThemeColors;
}

export function HomeScreen({ colors }: HomeScreenProps) {
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.hero}>
        <View style={[styles.pill, { backgroundColor: colors.primarySoft }]}> 
          <Text style={[styles.pillText, { color: colors.primary }]}>Multi-service IT Company</Text>
        </View>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Nexora Tech Mobile Suite</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}> 
          A premium, scalable platform connecting clients, admins, and delivery teams.
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Client Experience</Text>
        <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}> 
          Everything clients need to request, track, and pay for services.
        </Text>
      </View>
      {clientFeatures.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          colors={colors}
        />
      ))}

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Admin Command Center</Text>
        <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}> 
          Full visibility across clients, revenue, and service delivery.
        </Text>
      </View>
      {adminFeatures.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          colors={colors}
        />
      ))}

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Team Member Hub</Text>
        <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}> 
          Focused tools for delivery, collaboration, and reporting.
        </Text>
      </View>
      {teamFeatures.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          colors={colors}
        />
      ))}

      <View style={[styles.footer, { borderColor: colors.border }]}> 
        <Text style={[styles.footerTitle, { color: colors.textPrimary }]}>Platform Foundations</Text>
        <Text style={[styles.footerText, { color: colors.textSecondary }]}> 
          • Secure backend structure with role-based access and audit trails{"
"}          • Scalable modular architecture for new services and regions{"
"}          • Smooth animations and micro-interactions for a premium feel{"
"}          • Push notification readiness for lifecycle alerts
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 12
  },
  pill: {
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12
  },
  pillText: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase"
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4
  },
  sectionSubtitle: {
    fontSize: 13,
    lineHeight: 18
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderTopWidth: 1,
    marginTop: 10
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8
  },
  footerText: {
    fontSize: 13,
    lineHeight: 20
  }
});
